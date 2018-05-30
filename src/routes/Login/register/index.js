import React from 'react'
import { Form, Button, Input, Row, Col, Checkbox, message } from 'antd'
import regexp from '../../../utils/regexp'
import { Link } from 'dva/router'
import CountUp from 'react-countup'
import axios from 'axios'
import neuqer from '../../../images/logo_white.png'
import './index.less'

const FormItem = Form.Item

class Register extends React.Component {
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
    this.onComplete = this.onComplete.bind(this)
    this.agree = this.agree.bind(this)
    this.getCapacha = this.getCapacha.bind(this)
  }

  getCapacha (e) {
    e.preventDefault()
    this.setState({counter: 1, disabled: true})
    const {validateFields} = this.props.form
    validateFields(['mobile'], (errors, value) => {
      const {mobile} = value
      axios.get(`http://192.168.1.5:3000/user/sendMessage/${mobile}`)
        .then(res => {
          if (res.data.code === 1006) {
            message.error('短信验证码发送失败')
          } else if (res.data.code === 1000) {
            message.success('短信验证码发送成功')
            console.log('success')
          }
        })
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(111)
        this.setState({loading: true})
        axios.post(`http://192.168.1.5:3000/user/register`, {
          mobile: values.mobile,
          password: values.password,
          captcha: values.captcha,
          true_name: values.true_name,
          telephone: values.telephone,
          email: values.email
        }).then(res => {
          console.log('res', res)
          console.log(values.password)
          this.setState({loading: false})
          if (res.data.code === 1002) {
            message.error('未填写手机号或验证码')
          } else if (res.data.code === 1007) {
            message.error('验证码错误')
          } else if (res.data.code === 1003) {
            message.error('手机号已经被注册')
          } else if (res.data.code === 1000) {
            message.success('注册成功')
          }
        }).catch(err => {
          this.setState({loading: false})
          throw (new Error(err.message))
        })
      }
    })
  }
  checkPassword = (rule, value, callback) => {
    if (value && value !== this.props.form.getFieldValue('password')) {
      callback('两次输入的密码不一致!')
    } else {
      callback()
    }
  }
  agree = (e) => {
    e.preventDefault()
    console.log('I agree!')
  }
  onComplete = () => {
    this.setState({counter: 0, disabled: false})
    console.log(111)
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div className='register-wrapper'>
        <div className='logo' style={{fontSize: 20}}>
          <img src={neuqer} className='neuqer' alt="" />
          秦皇岛市物业监管平台
        </div>
        <div className='form'>
          <div className='login-title'>
            <span>快速注册</span>
            <hr />
          </div>
          <Form>
            <FormItem hasFeedback label='真名'>
              {getFieldDecorator('true_name', {
                rules: [{
                  required: true, message: '请输入真实姓名'
                }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem hasFeedback label='电话号码'>
              {getFieldDecorator('telephone', {
                rules: [{
                  required: true, message: '请输入电话号码'
                }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              label='设置密码'
              hasFeedback
              key='register-password'>
              {getFieldDecorator('password', {
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
                  validator: this.checkPassword
                }]
              })(
                <Input type='password' />
              )}
            </FormItem>
            <FormItem hasFeedback label='邮箱'>
              {getFieldDecorator('email', {
                rules: [{
                  pattern: regexp.mail, message: '请输入有效的邮箱地址'
                }, {
                  required: true, message: '请输入邮箱'
                }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem hasFeedback label='手机号码'>
              {getFieldDecorator('mobile', {
                rules: [{
                  pattern: regexp.mobile, message: '请输入由有效手机号码'
                }, {
                  required: true, message: '请输入手机号码'
                }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              label='验证码'
            >
              <Row gutter={8}>
                <Col span={16}>
                  {getFieldDecorator('captcha', {
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
                    onClick={this.getCapacha}>
                    {this.state.counter ? (
                      <CountUp
                        start={60}
                        end={0}
                        useEasing={false}
                        duration={60}
                        onComplete={this.onComplete}
                      />
                    ) : '获取验证码'}
                  </Button>
                </Col>
              </Row>
            </FormItem>
            <Button type='primary' size='large' onClick={this.handleSubmit} htmlType="submit"
                    loading={this.state.loading}>
              立即注册
            </Button>
            <div className='agree'>
              <Checkbox onChange={this.agree}>我已阅读并同意《秦皇岛牛客科技有限公司通讯协议》</Checkbox>
            </div>
            <div className="footer">
              <span>已有账号，我要</span>
              <Link to={'/login'}>
                <span className="login_link">登录</span>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Register)