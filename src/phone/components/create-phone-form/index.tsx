import { Form } from 'antd';
import React, { FunctionComponent, memo, useCallback } from 'react';

import { FormButtons, Title } from 'layout';
import { useCreatePhone } from 'phone/model';
import { PhoneFormValues } from 'phone/types/phone-form-values';

import { PhoneFormFields } from '../phone-form-fields';

interface Props {
    onClose(): void;
}

const CreatePhoneFormBase: FunctionComponent<Props> = (props) => {
  const { onClose } = props;

  const createPhone = useCreatePhone();

  const onSubmit = useCallback((phone: PhoneFormValues) => {
    createPhone.mutate(phone);
    onClose();
  }, [createPhone, onClose]);

  return (
    <Form
      name="createPhone"
      onFinish={onSubmit}
      layout="vertical"
    >
      <Title text="Create phone" />

      <PhoneFormFields />

      <FormButtons
        onClose={onClose}
      />

    </Form>
  );
};

export const CreatePhoneForm = memo(CreatePhoneFormBase);
