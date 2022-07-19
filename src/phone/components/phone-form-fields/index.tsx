import { Rule } from 'antd/lib/form';
import React, { FunctionComponent, memo } from 'react';

import { manufacturerOptions, operationSystemOptions } from 'consts';
import { FormItem } from 'layout';
import { useGetPhones } from 'phone/model';

interface Props {
  phoneCodeInEdit?: string;
}

const PhoneFormFieldsBase: FunctionComponent<Props> = ({ phoneCodeInEdit }) => {
  const { data } = useGetPhones();

  const usedCodes = (data || []).map(({ code }) => code).filter((code) => code !== phoneCodeInEdit);

  const codeUniqueRule: Rule = {
    validator(_, value: string) {
      if (usedCodes.includes(value)) {
        return Promise.reject(new Error('Code already used'));
      }
      return Promise.resolve();
    },
  };
  return (
    <>
      <FormItem
        name="code"
        label="Code designation (identifier)"
        customRules={[codeUniqueRule]}
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
};

export const PhoneFormFields = memo(PhoneFormFieldsBase);
