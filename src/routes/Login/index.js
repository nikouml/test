import React from 'react'
import { Form, Button, Input, Icon} from 'antd'
import neuqer from '../../images/logo_white.png'
import regexp from '../../utils/regexp'
import { Link } from 'dva/router'
import './index.less'

const FormItem = Form.Item

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    })
  }
  render () {
    const {getFieldDecorator} = this.props.form
    const bg = `url("http://p53vmqr8d.bkt.clouddn.com/@3x%E5%BA%95%E9%83%A8%E5%9B%BE%E7%89%87.png")`
    return (
      <div className='login-wrapper' style={{backgroundImage: bg}}>
        <div className='logo' style={{fontSize:20}}>
          <img src={ neuqer } className='neuqer' alt="" />
          秦皇岛市物业监管平台</div>
        <div className='form'>
          <div className='login-title'>
            <span className='login-title-main'>用户登录</span>
          </div>
          <Form>
            <FormItem hasFeedback>
              {getFieldDecorator('mobile', {
                rules: [{
                  pattern: regexp.mobile, message: '请输入有效的手机号'
                }, {
                  required: true, message: '请输入手机号'
                }]
              })(
                <Input addonBefore={<Icon type='user' />} placeholder='手机号' />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [{
                  pattern: regexp.password, message: '请输入有效的密码（6-18位）'
                }, {
                  required: true, message: '请输入密码！'
                }]
              })(
                <Input addonBefore={<Icon type='lock' />} type='password'  placeholder='密码' />
              )}
            </FormItem>
            <Button type='primary' size='large' htmlType="submit" loading={this.state.loading}>
              登录
            </Button>

          </Form>
          <div className='login-footer'>
            <Link to={'/register'}>
              <span>注册账号</span>
            </Link>
            <Link to={'/forget'}>
              <span className='login-form-forgot'>忘记密码</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)