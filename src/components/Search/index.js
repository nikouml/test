import {Component} from 'react'
import {Form, Input, DatePicker, Radio, Select, Checkbox, Button, message, Spin} from 'antd'
import axios from 'axios'
import api from '../../config/api'
import {withRouter} from 'dva/router'
import {connect} from 'dva'
import './index.less'
const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker
const RangePicker = DatePicker.RangePicker
const RadioGroup = Radio.Group
const Option = Select.Option
const CheckboxGroup = Checkbox.Group
const {TextArea} = Input

class SearchHeader extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      searchData: [],
      fetching: false
    }
  }
  componentDidMount () {
    this.getInitData(this.props.location.search)
  }
  search ({url}) {
    this.setState({fetching: true})
    /* axios.get(url).then(res => {
      switch (res.data.code) {
      }
    }) */
    if (!url) {
      throw new Error('没有传入url')
    }
    axios.get(url)
      .then(res => {
        this.setState({searchData: res.data, fetching: false})
      }).catch(err => {
        message.error(err.message || '发生错误')
      })
  }
  getInitData (search) {
    const {dispatch} = this.props
    let query = {}
    let block = search.slice(1).split('&')
    block.forEach(item => {
      let arr = item.split('=')
      if (!query[arr[0]]) {
        query[arr[0]] = [arr[1]]
      } else {
        query[arr[0]].push(arr[1])
      }
    })
    if (!query.form[0]) {
      return
    }
    dispatch({
      type: 'search/setCurrentForm',
      payload: {
        currentForm: query.form[0]
      }
    })
    axios.get(`${api.basePath}/${query.form[0]}`)
      .then(res => {
        if (res.data.code === 1000) {
          dispatch({
            type: 'search/setCurrentSearchData',
            payload: {
              currentSearchData: res.data.data
            }
          })
        } else {
          message.error('获取信息发生错误')
        }
      }).catch(err => {
        message.error('获取信息发生错误')
      })
  }
  // 创建label
  createLabel (label) {
    if (label) {
      return (
        <span style={{color: '#40a9ff', display: 'inline-block', width: '100%', height: '100%', textAlign: 'left'}}>{label}</span>
      )
    }
    return ''
  }
  getControl ({type, size, name, placeholder, format, showTime = false, style, select = [], plainOptions = [], defaultCheckedList = [], selectSearch = {}}) {
    switch (name) {
    case 'input':
      return (
        <Input style={{marginTop: '-3px'}} type={type} size={size} placeholder={placeholder} />
      )
    case 'DatePicker':
      return (
        <DatePicker size={size} showTime={showTime} format={format} />
      )
    case 'MonthPicker':
      return (
        <MonthPicker size={size} format={format || 'YYYY-MM'} />
      )
    case 'RangePicker':
      return (
        <RangePicker size={size} style={style || {width: '200px'}} showTime={showTime} format={format} />
      )
    case 'radio':
      return (
        <RadioGroup>
          {select.map((item, index) => {
            return (
              <Radio key={index} style={style} value={item.value}>{item.label}</Radio>
            )
          })}
        </RadioGroup>
      )
    case 'select':
      return (
        <Select size='default' style={{width: '150px'}} placeholder={placeholder}>
          {select.map((item, index) => {
            return (
              <Option key={index} style={style} value={item.value}>{item.label}</Option>
            )
          })}
        </Select>
      )
    case 'checkBox':
      return (
        <CheckboxGroup options={plainOptions} />
      )
    case 'TextArea':
      return (
        <TextArea placeholder={placeholder} autosize />
      )
    case 'searchSelect':
      return (
        <Select
          labelInValue
          size={size}
          placeholder={placeholder}
          notFoundContent={this.state.fetching ? <Spin size='small' /> : null}
          filterOption={false}
          onFocus={() => { this.search(selectSearch) }}
          style={{ width: '150px' }}
        >
          {this.state.searchData.map(d => <Option key={d.value}>{d.label}</Option>)}
        </Select>
      )
    default:
      throw new Error(`无法识别的控件名 ${name}`)
    }
  }
  handleSubmit = (e) => {
    const {dispatch} = this.props
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (!err) {
        const {config = {}} = this.props
        const {button = {}, search} = config
        let {url, cb = () => { console.log('call back') }, method = 'get'} = button
        if (!url) {
          throw new Error('必须填写url')
        }
        url += '?'
        let keys = Object.keys(values)
        keys.forEach((item, index) => {
          item = search.filter(data => item === data.varName)[0]
          url += `conditions[${index}][0]=${item.varName}&conditions[${index}][1]=${item.range}&conditions[${index}][2]=${((item.range === 'like' && item.like[0]) ? '%' : '') + values[item.varName] + ((item.range === 'like' && item.like[1]) ? '%' : '')}`
          if (index < keys.length - 1) {
            url += '&'
          }
        })
        console.log(url, values)
        axios({
          method,
          url
        }).then(res => {
          if (res.data.code === 1000) {
            dispatch({
              type: 'search/setCurrentSearchData',
              payload: {
                currentSearchData: res.data.data
              }
            })
            cb(null, res, message)
          } else {
            cb(new Error('发生错误'), res, message)
          }
        }).catch(err => {
          cb(err, null, message)
        })
        console.log('Received values of form: ', values)
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const {config = {}} = this.props
    const {button = {}, search = []} = config
    return (
      <div className='searchHeader'>
        <Form className='searchHeader-form' layout='inline' onSubmit={this.handleSubmit}>
          {search.map((item, index) => {
            const {name, label = '', varName, rules = [], defaultValue = void 0, type = '', size = 'default', placeholder = '', style = {}, select = [], selectSearch = {}} = item
            if (!varName) {
              throw new Error('没有定义varName')
            }
            return (
              <FormItem
                key={index}
                label={this.createLabel(label)}>
                {getFieldDecorator(varName, {
                  rules,
                  initialValue: defaultValue
                })(this.getControl({type, name, size, placeholder, style, select, selectSearch}))}
              </FormItem>
            )
          })}
          <FormItem>
            <Button
              type={button.type || 'primary'}
              htmlType='submit'
            >
              {button.text || '搜索'}
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(withRouter(connect(({search}) => ({search}))(SearchHeader)))
