import {Component} from 'react'
import axios from 'axios'
import saveInTime from '../../utils/saveInTime'
import config from '../../config/api'
import {Card, Form, Input, DatePicker, Radio, Select, Checkbox, Button, message} from 'antd'
import './index.less'
const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker
const RangePicker = DatePicker.RangePicker
const RadioGroup = Radio.Group
const Option = Select.Option
const CheckboxGroup = Checkbox.Group
const {TextArea} = Input
// let globalIndex = 0
let formState = {value: 'resolve'}

class MyForm extends Component {
  componentDidMount () {
    const {time, url, method} = config.save
    saveInTime(time, formState, {url, axios, method}, message).call(this)
  }
  componentDidUpdate () {
    formState.value = 'pending'
  }
  // 创建control
  getControl ({type, size, name, placeholder, format, showTime = false, style, select = [], plainOptions = [], defaultCheckedList = []}) {
    switch (name) {
    case 'input':
      return (
        <Input type={type} size={size} placeholder={placeholder} />
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
        <Select placeholder={placeholder}>
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
    default:
      throw new Error(`无法识别的控件名 ${name}`)
    }
  }
  // 创建label
  createLabel (label) {
    return (
      <span style={{color: '#40a9ff'}}>{label}</span>
    )
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (!err) {
        const {config = {}} = this.props
        const {submit = {}} = config
        const {method = 'get', url = '/', cb = () => { console.log('call back') }} = submit
        axios({
          method,
          url,
          data: values
        }).then(res => {
          cb(null, res, message)
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
    const configArr = Array.from(config)
    const {submit = {}} = config
    return (
      <Form className='myform' layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
        {/* 遍历每一个小卡片 */}
        {configArr.map((item, index) => {
          const {title = false, key = index, content = {}} = item
          const contentArr = Array.from(content)
          return (
            <Card key={key} style={{overflowX: 'auto', marginTop: '10px', textAlign: 'left', display: 'flex', flexDirection: 'column'}}>
              {/* 显示标题 */}
              {title && (
                <div className='myform-title'>{title}</div>
              )}
              {/* 显示form内容，先遍历出每一行，然后在行中遍历出每一个控件 */}
              {contentArr.map((line, lineIndex) => {
                {/* 遍历出每一个控件 */}
                return (
                  <div key={lineIndex} className='myform-line'>
                    {line.length > 2 && new Error('一行最多只能有两个控件')}
                    {line.map((item, index) => {
                      const {key = index, control = {name: 'input', type: 'text', size: 'default', defaultValue: '', placeholder: ''}, varName = '', label = '', rules = [], trigger = 'onChange'} = item
                      if (varName === '' || varName === void 0) {
                        throw new Error(`varName 必填 ${index}`)
                      }
                      if (label === '' || label === void 0) {
                        throw new Error(`label 必填 ${index}`)
                      }
                      const {name, type, size, defaultValue, placeholder, format, showTime, style, select, plainOptions, defaultCheckedList} = control
                      return (
                        <div
                          className='myform-control'
                          style={line.length === 1 ? {width: '1000px'} : ([0, 1].includes(parseInt(key)) ? {marginRight: '40px'} : {})}
                          key={key}>
                          <FormItem
                            labelCol={line.length === 1 ? {span: 2} : { span: 4 }}
                            wrapperCol={line.length === 1 ? {span: 21, offset: 0} : { span: 19, offset: 1 }}
                            label={this.createLabel(label)}>
                            {getFieldDecorator(varName, {
                              rules,
                              initialValue: defaultValue,
                              trigger
                            })(this.getControl({type, name, size, placeholder, format, showTime, style, select, plainOptions, defaultCheckedList}))}
                          </FormItem>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </Card>
          )
        })}
        {submit.text && (
          <FormItem>
            <Button size={submit.size} type={submit.type} style={submit.style} htmlType='submit'>
              {submit.text}
            </Button>
          </FormItem>
        )}
      </Form>
    )
  }
}

export default Form.create()(MyForm)
