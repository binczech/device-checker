import { BaseOptionType } from 'antd/lib/select';
import React, { FunctionComponent, memo } from 'react';

import { FormItem } from 'layout';

const manufacturerOptions: Array<BaseOptionType> = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Samsung', value: 'Samsung' },
  { label: 'Huawei', value: 'Huawei' },
  { label: 'Xiaomi', value: 'Xiaomi' },
  { label: 'Oppo', value: 'Oppo' },
  { label: 'Vivo', value: 'Vivo' },
  { label: 'Nokia', value: 'Nokia' },
  { label: 'Sony', value: 'Sony' },
  { label: 'LG', value: 'LG' },
  { label: 'Motorola', value: 'Motorola' },
  { label: 'Asus', value: 'Asus' },
  { label: 'Blackberry', value: 'Blackberry' },
  { label: 'Alcatel', value: 'Alcatel' },
  { label: 'ZTE', value: 'ZTE' },
  { label: 'HTC', value: 'HTC' },
  { label: 'Microsoft', value: 'Microsoft' },
  { label: 'Google', value: 'Google' },
];

const operationSystemOptions: Array<BaseOptionType> = [
  { label: 'Android', value: 'Android' },
  { label: 'iOS', value: 'iOS' },
  { label: 'Windows', value: 'Windows' },
];

const PhoneFormFieldsBase: FunctionComponent = () => (
  <>
    <FormItem
      name="code"
      label="Code designation (identifier)"
      required
    />

    <FormItem
      name="vendor"
      label="Manufacturer"
      type="select"
      options={manufacturerOptions}
      required
    />

    <FormItem
      name="model"
      label="Model"
      required
    />

    <FormItem
      name="os"
      label="Operation system"
      type="select"
      options={operationSystemOptions}
      required
    />

    <FormItem
      name="osVersion"
      label="Operation system version"
      required
    />

    <FormItem
      name="image"
      label="Image (URL)"
    />
  </>
);

export const PhoneFormFields = memo(PhoneFormFieldsBase);
