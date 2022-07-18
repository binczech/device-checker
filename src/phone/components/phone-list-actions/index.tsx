import { Col, Row } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { Button } from 'layout';

interface Props {
    openPhoneModal(): void;
}

const PhoneListActionsBase: FunctionComponent<Props> = ({ openPhoneModal }) => (
  <Row gutter={8} justify="end">
    <Col>
      <Button onClick={openPhoneModal}>Add Phone</Button>
    </Col>
  </Row>
);

export const PhoneListActions = memo(PhoneListActionsBase);
