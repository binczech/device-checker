import { Modal } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { CreatePhoneForm } from '../create-phone-form';

interface Props {
    visible: boolean;
    onClose(): void;
}

const CreateFormModalBase: FunctionComponent<Props> = (props) => {
  const { onClose, visible } = props;

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <div data-testid="create-form-modal">
        <CreatePhoneForm
          onClose={onClose}
        />
      </div>
    </Modal>
  );
};

export const CreateFormModal = memo(CreateFormModalBase);
