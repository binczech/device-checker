import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { Button, Title } from 'layout';
import { Login } from 'user/types';

interface Props {
    onSubmit(values: Login): void;
}

const LoginFormBase: FunctionComponent<Props> = (props) => {
  const { onSubmit } = props;

  return (
    <Form
      name="login"
      className="login-form"
      onFinish={onSubmit}
    >
      <Title text="Login" />
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" fullWidth testId="submit-login">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export const LoginForm = memo(LoginFormBase);
