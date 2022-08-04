import { Col, Row } from 'antd';
import React, { FunctionComponent, memo, useCallback } from 'react';

import { Button } from 'layout';
import { useDeletePhone } from 'phone/model';
import { Phone } from 'phone/types/phone';

interface Props {
    phone: Phone;
    openPhoneModal(): void;
}

const PhoneActionsBase: FunctionComponent<Props> = (props) => {
  const { phone, openPhoneModal } = props;

  const deletePhone = useDeletePhone(phone.id);

  const onDelete = useCallback(() => {
    deletePhone.mutate();
  }, [deletePhone]);

  return (
    <Row gutter={8} justify="end">
      <Col>
        <Button
          icon="CloseOutlined"
          danger
          title="Delete"
          confirm
          onClick={onDelete}
          testId="delete-phone"
        />
      </Col>
      <Col>
        <Button
          icon="EditOutlined"
          type="default"
          title="Edit"
          onClick={openPhoneModal}
          testId="edit-phone"
        />
      </Col>
    </Row>
  );
};

export const PhoneActions = memo(PhoneActionsBase);
