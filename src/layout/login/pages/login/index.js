import React from 'react'
import { login } from '@/api'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import styles from './index.module.less'
import auth from '@/utils/auth'

// @Form.create()
class App extends React.Component {
  formRef = React.createRef()

  state = {
    // autoLogin: true,
    loginErrno: 0,
    loginMsg: ''
  }

  componentDidMount() {
    document.title = '登录'
  }

  handleSubmit = () => {

    this.formRef.current.validateFields().then(async (values) => {

      const res = await login(values)
      console.log(res)
      if (res.errno !== 0) {
        this.setState({ loginErrno: res.errno, loginMsg: res.msg })
        return
      }

      auth.login(res.data)

      const { history } = this.props
      history.push('/')

    })

  }

  // changeAutoLogin = e => {
  //   this.setState({
  //     autoLogin: e.target.checked,
  //   })
  // }

  renderMessage = content => {
    return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  }

  render() {
    const { loginErrno, loginMsg } = this.state
    return (
      <div className={styles.loginPage} style={{ backgroundColor: this.props.bgc }}>
        <Form onFinish={this.handleSubmit} className={styles.loginForm} ref={this.formRef}>
          {loginErrno !== 0 && this.renderMessage(loginMsg)}
          <Form.Item name="userName" rules={[{ required: true, message: '请输入用户名！' }]}>

            <Input size="large" prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名：admin" />

          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>

            <Input size="large" prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码：888888" />
          </Form.Item>
          <Form.Item className={styles.last}>
            {/* <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              自动登录
             </Checkbox> */}
            {/* <a className={styles.loginFormForgot} href="">忘记密码</a> */}
            <Button size="large" type="primary" htmlType="submit" className={styles.loginFormButton}>
              登录
            </Button>
            <Link className={styles.loginFormReg} to="/user/register">
              注册账户
            </Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default App
