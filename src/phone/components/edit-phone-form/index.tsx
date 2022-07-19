import { Form } from 'antd';
import React, {
  FunctionComponent, memo, useCallback, useMemo,
} from 'react';

import { FormButtons, Title } from 'layout';
import { useEditPhone } from 'phone/model';
import { Phone } from 'phone/types/phone';
import { PhoneFormValues } from 'phone/types/phone-form-values';

import { PhoneFormFields } from '../phone-form-fields';

interface Props {
    onClose(): void;
    phone: Phone;
}

const EditPhoneFormBase: FunctionComponent<Props> = (props) => {
  const { onClose, phone } = props;
  const {
    code, id, model, os, osVersion, vendor, image,
  } = phone;

  const editPhone = useEditPhone(id);

  const onSubmit = useCallback((editedPhone: PhoneFormValues) => {
    editPhone.mutate(editedPhone);
    onClose();
  }, [editPhone, onClose]);

  const initialValues: PhoneFormValues = useMemo(() => ({
    code, model, os, osVersion, vendor, image,
  }), [code, image, model, os, osVersion, vendor]);

  return (
    <Form
      name="editPhone"
      onFinish={onSubmit}
      layout="vertical"
      initialValues={initialValues}
    >
      <Title text="Edit phone" />

      <PhoneFormFields
        phoneCodeInEdit={code}
      />

      <FormButtons
        edit
        onClose={onClose}
      />
    </Form>
  );
};

export const EditPhoneForm = memo(EditPhoneFormBase);
