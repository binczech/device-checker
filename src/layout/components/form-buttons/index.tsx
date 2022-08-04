import { Col, Row } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { Button } from 'layout';

interface Props {
    edit?: boolean;
    onClose(): void;
}

const FormButtonsBase: FunctionComponent<Props> = (props) => {
  const { edit, onClose } = props;

  return (
    <Row justify="end" gutter={8}>
      <Col>
        <Button type="default" onClick={onClose}>
          Cancel
        </Button>
      </Col>
      <Col>
        <Button htmlType="submit" testId="submit-form">
          {edit ? 'Edit' : 'Create'}
        </Button>
      </Col>
    </Row>
  );
};

export const FormButtons = memo(FormButtonsBase);
