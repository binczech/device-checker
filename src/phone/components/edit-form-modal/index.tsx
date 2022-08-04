import { Modal } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { Phone } from 'phone/types/phone';

import { EditPhoneForm } from '../edit-phone-form';

interface Props {
  phone: Phone;
    visible: boolean;
    onClose(): void;
}

const EditFormModalBase: FunctionComponent<Props> = (props) => {
  const { onClose, visible, phone } = props;

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <div data-testid="edit-form-modal">
        <EditPhoneForm
          phone={phone}
          onClose={onClose}
        />
      </div>
    </Modal>
  );
};

export const EditFormModal = memo(EditFormModalBase);
