import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Row, Col, Popover, Progress } from 'antd'
import styles from './index.module.less'

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      强度：强
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      强度：中
    </div>
  ),
  poor: (
    <div className={styles.error}>
      强度：太短
    </div>
  ),
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};


class Register extends Component {
  formRef = React.createRef()

  state = {
    count: 0,
    confirmDirty: false,
    visible: false
  }

  componentDidMount() {
    document.title = '注册';
  }

  onGetCaptcha = () => {
    // let count = 59
    // this.setState({ count })
    // this.interval = setInterval(() => {
    //   count -= 1
    //   this.setState({ count })
    //   if (count === 0) {
    //     clearInterval(this.interval)
    //   }
    // }, 1000)
  }

  getPasswordStatus = () => {
    // const [form] = Form.useForm();
    // console.log(this.formRef)
    const value = this.formRef.current.getFieldValue('password')
    if (value && value.length > 9) {
      return 'ok'
    }
    if (value && value.length > 5) {
      return 'pass'
    }
    return 'poor'
  }

  handleSubmit = e => {
    // e.preventDefault()
    // const { history } = this.props
    // // const [form] = Form.useForm();
    // this.formRef.current.validateFields({ force: true }, (err, values) => {
    //   if (!err) {
    //     //console.log(values)
    //     //注册成功后的逻辑
    //     history.push({
    //       pathname: '/user/register-result',
    //       state: {
    //         account: values.mail
    //       }
    //     });
    //   }
    // })
  }

  handleConfirmBlur = e => {
    const { value } = e.target
    const { confirmDirty } = this.state
    this.setState({ confirmDirty: confirmDirty || !!value })
  }

  checkConfirm = (rule, value) => {
    const promise = Promise;
    if (value && value !== this.formRef.current.getFieldValue('password')) {

      return promise.reject('两次输入的密码不匹配!');
    }
    return promise.resolve();
  }

  checkPassword = (rule, value) => {
    const promise = Promise; // 没有值的情况

    if (!value) {
      this.setState({
        visible: !!value,
      })
      // callback('error')
      return promise.reject(
        '请输入密码！'
      );
    } else {
      const { visible, confirmDirty } = this.state
      if (!visible) {
        this.setState({
          visible: !!value,
        })
      }
      if (value.length < 6) {
        return promise.reject('')
      } else {
        // const [form] = Form.useForm();
        if (value && confirmDirty) {
          this.formRef.current.validateFields(['confirm'])
        }
        return promise.resolve();
      }
    }
  }

  renderPasswordProgress = () => {
    // const [form] = Form.useForm();
    const value = this.formRef.current.getFieldValue('password')
    const passwordStatus = this.getPasswordStatus()
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null
  }

  render() {
    const { submitting } = this.props
    const { count, visible } = this.state
    return (
      <div className={styles.main}>
        <h3>注册</h3>
        <Form ref={this.formRef} onSubmit={this.handleSubmit}>
          <Form.Item name="mail" rules={[
            {
              required: true,
              message: '请输入邮箱地址！',
            },
            {
              type: 'email',
              message: '邮箱地址格式错误！',
            },
          ]}>
            <Input size="large" placeholder="邮箱" />
          </Form.Item>
          <Popover
            content={
              visible && (
                <div style={{ padding: '4px 0' }}>
                  {passwordStatusMap[this.getPasswordStatus()]}
                  {this.renderPasswordProgress()}
                  <div style={{ marginTop: 10 }}>
                    请至少输入 6 个字符。请不要使用容易被猜到的密码。
                  </div>
                </div>
              )
            }
            overlayStyle={{ width: 240 }}
            placement="right"
            visible={visible}
          >
            <Form.Item name="password" className={visible && (
              this.formRef.current.getFieldValue('password') &&
              this.formRef.current.getFieldValue('password').length > 0 &&
              styles.password)
            } rules={[
              {
                validator: this.checkPassword,
              },
            ]}>

              <Input size="large" type="password" placeholder="至少6位密码，区分大小写" />

            </Form.Item>
          </Popover>
          <Form.Item name="confirm" rules={[
            {
              required: true,
              message: '请确认密码！',
            },
            {
              validator: this.checkConfirm,
            },
          ]}>
            <Input size="large" type="password" placeholder="确认密码" />
          </Form.Item>
          <Form.Item name="mobile" rules={[
            {
              required: true,
              message: '请输入手机号！',
            },
            {
              pattern: /^1\d{10}$/,
              message: '手机号格式错误！',
            },
          ]}>

            <Input size="large" placeholder="11位手机号" />
          </Form.Item>
          <Form.Item name="captcha" rules={[
            {
              required: true,
              message: '请输入验证码！',
            },
          ]}>
            <Row gutter={8}>
              <Col span={16}>
                <Input size="large" placeholder="验证码" />
              </Col>
              <Col span={8}>
                <Button
                  size="large"
                  disabled={count}
                  className={styles.getCaptcha}
                  onClick={this.onGetCaptcha}
                >
                  {count ? `${count} s` : '获取验证码'}
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              注册
            </Button>
            <Link className={styles.login} to="/user/login">
              使用已有账户登录
            </Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Register
