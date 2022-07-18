import { Col, Row } from 'antd';
import React, {
  FunctionComponent, memo, useCallback, useContext, useState,
} from 'react';

import { Content, Loader } from 'layout';
import { CreateFormModal, PhoneInfo, PhoneListActions } from 'phone/components';
import { useGetPhones } from 'phone/model';
import { LoggedInUserContext } from 'user/utils/logged-in-user-context';

const ListBase: FunctionComponent = () => {
  const {
    data, isError, isSuccess, error,
  } = useGetPhones();
  const { user } = useContext(LoggedInUserContext);
  const [showModal, setShowModal] = useState(false);

  const openPhoneModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closePhoneModal = useCallback(() => {
    setShowModal(false);
  }, []);

  if (isError) {
    return (
      <Content>{error.message}</Content>
    );
  }

  if (isSuccess) {
    return (
      <Content>
        {user?.type === 'admin' && <PhoneListActions openPhoneModal={openPhoneModal} />}
        <Row gutter={[16, 16]}>
          {data.map((phone) => (
            <Col xs={24} md={12} lg={8} xl={6} key={phone.id}>
              <PhoneInfo phone={phone} />
            </Col>
          ))}
        </Row>
        <CreateFormModal
          onClose={closePhoneModal}
          visible={showModal}
        />
      </Content>
    );
  }

  return (
    <Content>
      <Loader loading withoutChildren />
    </Content>
  );
};

export const List = memo(ListBase);
