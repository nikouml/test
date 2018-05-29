import React from 'react'
import { Form, Button, Input, Row, Col } from 'antd'
import regexp from '../../../utils/regexp'
import { Link } from 'dva/router'
import CountUp from 'react-countup'
import neuqer from '../../../images/logo_white.png'
import './index.less'

const FormItem = Form.Item

class Forget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      submitted: false,
      counter: 0,
      disabled: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
    this.count = this.count.bind(this)
    this.onComplete = this.onComplete.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    })
  }
  checkPassword = (rule, value, callback) => {
    if (value && value !== this.props.form.getFieldValue('newPassword')) {
      callback('两次输入的密码不一致!')
    } else {
      callback()
    }
  }
  count = (e) => {
    e.preventDefault()
    this.setState({counter: 1, disabled: true})
    // setTimeout(() => {
    //   this.setState({counter: this.state.counter - 1})
    // }, 1000)
    console.log('yzm')
  }
  onComplete = () => {
    this.setState({counter: 0, disabled: false})
    console.log(111)
  }

  render () {
    const {getFieldDecorator} = this.props.form
    // const formItemLayout = {
    //   labelCol: {
    //     xs: {span: 24},
    //     sm: {span: 4},
    //   },
    //   wrapperCol: {
    //     xs: {span: 24},
    //     sm: {span: 16},
    //   },
    // }
    return (
      <div className='register-wrapper'>
        <div className='logo' style={{fontSize:20}}>
          <img src={ neuqer } className='neuqer' alt="" />
          秦皇岛市物业监管平台</div>
        <div className='form'>
          <div className='login-title'>
            <span>快速找回密码</span>
            <hr />
          </div>
          <Form>

            <FormItem hasFeedback label='手机号' >
              {getFieldDecorator('mobile', {
                rules: [{
                  pattern: regexp.mobile, message: '请输入有效的手机号'
                }, {
                  required: true, message: '请输入手机号'
                }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem hasFeedback label='新密码'>
              {getFieldDecorator('newPassword', {
                rules: [{
                  pattern: regexp.password, message: '请输入有效的密码（6-18位）'
                }, {
                  required: true, message: '请输入密码！'
                }]
              })(
                <Input type='password' />
              )}
            </FormItem>
            <FormItem
              label='确认密码'
              hasFeedback
              key='register-check-password'
            >
              {getFieldDecorator('passwordConfirmation', {
                rules: [{
                  required: true, message: '与上一次密码不一致'
                }, {
                  validator: this.checkPassword}]})(
                <Input type='password' />
              )}
            </FormItem>
            <FormItem
              label='验证码'
            >
              <Row gutter={8}>
                <Col span={16}>
                  {getFieldDecorator('code', {
                    rules: [{required: true, message: '请输入你获取到的验证码'}]
                  })(
                    <Input size='large' />
                  )}
                </Col>
                <Col span={8}>
                  <Button
                    size='large'
                    type='primary'
                    disabled={this.state.disabled}
                    onClick={this.count}>
                    {this.state.counter ? (
                      <CountUp
                      start = {60}
                      end = {0}
                      useEasing = {false}
                      duration = {60}
                      onComplete = {this.onComplete}
                      />
                    ) : '获取验证码'}
                    </Button>
                </Col>
              </Row>
            </FormItem>
            <Button type='primary' size='large' htmlType="submit" loading={this.state.loading}>
              确认修改
            </Button>
            <div className="footer">
              <span>已有账号，我要</span>
              <Link to={'/login'}>
                <span>登录</span>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Forget)