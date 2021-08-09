import React, { Component } from 'react';
import { Form, Input, Button, Alert, Divider } from 'antd';
import { digitUppercase } from '@/utils/utils';
import styles from './style.module.less';
import { observer, inject } from 'mobx-react';

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

@inject('Step') @observer
class Step2 extends Component {
  formRef = React.createRef()
  render() {
    const { Step, history, submitting } = this.props;
    const onPrev = () => {
      history.push('/form/step-form/step1');
    };
    const onValidateForm = () => {
      // e.preventDefault();
      this.formRef.current.validateFields().then(() => {
        history.push('/form/step-form/step3')
      });
    };
    return (
      <Form ref={this.formRef} layout="horizontal" className={styles.stepForm}>
        <Alert
          closable
          showIcon
          message="确认转账后，资金将直接打入对方账户，无法退回。"
          style={{ marginBottom: 24 }}
        />
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="付款账户">
          {Step.step.payAccount}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="收款账户">
          {Step.step.receiverAccount}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="收款人姓名">
          {Step.step.receiverName}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepFormText} label="转账金额">
          <span className={styles.money}>{Step.step.amount}</span>
          <span className={styles.uppercase}>
            （
            {digitUppercase(Step.step.amount)}
            ）
          </span>
        </Form.Item>
        <Divider style={{ margin: '24px 0' }} />
        <Form.Item {...formItemLayout} label="支付密码" name="password" rules={[
          {
            required: true,
            message: '需要支付密码才能进行支付',
          },
        ]} required={false}>
          <Input type="password" autoComplete="off" style={{ width: '80%' }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: 8 }}
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span,
            },
          }}
          label=""
        >
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            提交
          </Button>
          <Button onClick={onPrev} style={{ marginLeft: 8 }}>
            上一步
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Step2;
