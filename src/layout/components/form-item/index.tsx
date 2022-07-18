import { Form, Input, Select } from 'antd';
import { BaseOptionType } from 'antd/lib/select';
import React, { FunctionComponent, memo } from 'react';

type FormItemType = 'text' | 'password' | 'select';

interface Props {
    type?: FormItemType;
    name: string;
    label: string;
    required?: boolean;
    options?: Array<BaseOptionType>;
}

const FormItemBase: FunctionComponent<Props> = (props) => {
  const {
    type = 'text',
    name,
    label,
    required = false,
    options,
  } = props;

  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required, message: `Please input ${label}!` }]}
    >
      {(type === 'text' || type === 'password') ? (
        <Input
          placeholder={label}
          type={type === 'password' ? 'password' : 'text'}
        />
      ) : (
        <Select
          placeholder={label}
          options={options}
        />
      )}
    </Form.Item>
  );
};

export const FormItem = memo(FormItemBase);
