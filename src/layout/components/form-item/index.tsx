/* eslint-disable react/no-unused-prop-types */
import {
  Checkbox, Form, Input, Select,
} from 'antd';
import { Rule } from 'antd/lib/form';
import { BaseOptionType } from 'antd/lib/select';
import React, { FunctionComponent, memo, ReactNode } from 'react';

type FormItemType = 'text' | 'password' | 'select' | 'checkbox';

interface Props {
    type?: FormItemType;
    name: string;
    label: string;
    required?: boolean;
    options?: Array<BaseOptionType>;
    clearable?: boolean;
    customRules?: Array<Rule>;
}

const getField = ({
  label, name, clearable, options, type,
}: Props): ReactNode => {
  switch (type) {
    case 'password':
      return (
        <Input
          placeholder={label}
          type="password"
        />
      );

    case 'text':
      return (
        <Input
          placeholder={label}
          type="text"
        />
      );

    case 'select':
      return (
        <Select
          placeholder={label}
          options={options}
          allowClear={clearable}
        />
      );

    case 'checkbox':
      return (
        <Checkbox
          name={name}
        />
      );

    default:
      return (
        <Input
          placeholder={label}
          type="text"
        />
      );
  }
};

const FormItemBase: FunctionComponent<Props> = (props) => {
  const {
    type = 'text',
    name,
    label,
    required = false,
    customRules = [],
  } = props;

  return (
    <Form.Item
      name={name}
      label={label}
      valuePropName={type === 'checkbox' ? 'checked' : undefined}
      rules={[{ required, message: `Please input ${label}!` }, ...customRules]}
    >

      {getField(props)}
    </Form.Item>
  );
};

export const FormItem = memo(FormItemBase);
