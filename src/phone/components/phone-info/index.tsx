import { Col, Row } from 'antd';
import { isUndefined } from 'lodash/fp';
import React, {
  FunctionComponent, memo, useCallback, useContext, useState,
} from 'react';

import { Button } from 'layout';
import { useToggleBorrowPhone } from 'phone/model';
import { Phone } from 'phone/types/phone';
import { LoggedInUserContext } from 'user/utils/logged-in-user-context';

import './styles.scss';
import { EditFormModal } from '../edit-form-modal';
import { PhoneActions } from '../phone-actions';
import { PhoneImage } from './phone-image';

interface Props {
    phone: Phone;
}

const getButtonText = (isBorrowed: boolean, isBorrowedByCurrentUser: boolean) => {
  if (!isBorrowed) return 'Borrow';

  return isBorrowedByCurrentUser ? 'Return' : 'Borrowed';
};

const PhoneInfoBase: FunctionComponent<Props> = (props) => {
  const { phone } = props;
  const {
    id: phoneId, model, os, osVersion, vendor, borrowed, image,
  } = phone;

  const { user } = useContext(LoggedInUserContext);
  const { id: userId, type: userType } = user || {};

  const isBorrowed = !isUndefined(borrowed);
  const isBorrowedByCurrentUser = isBorrowed && borrowed?.user.id === userId;
  const isBorrowedByOther = isBorrowed && !isBorrowedByCurrentUser;

  const borrowPhone = useToggleBorrowPhone(phoneId, isBorrowed);

  const onBorrow = useCallback(() => {
    borrowPhone.mutate();
  }, [borrowPhone]);

  const [showModal, setShowModal] = useState(false);

  const openPhoneModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closePhoneModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <div className="phone">
        {userType === 'admin' && (
        <PhoneActions
          phone={phone}
          openPhoneModal={openPhoneModal}
        />
        )}
        <Row>
          <Col xs={24}>
            <PhoneImage borrowed={borrowed} image={image} />
          </Col>
          <Col xs={24}>
            <div className="model">{model}</div>
            <div className="vendor">{vendor}</div>
          </Col>
          <Col xs={24}>
            {os}
            {' '}
            /
            {' '}
            {osVersion}
          </Col>
          <Col xs={24}>
            <Button
              fullWidth
              disabled={isBorrowedByOther}
              type={isBorrowedByCurrentUser ? 'default' : undefined}
              onClick={onBorrow}
            >
              {getButtonText(isBorrowed, isBorrowedByCurrentUser)}
            </Button>
          </Col>
        </Row>
      </div>
      <EditFormModal
        visible={showModal}
        phone={phone}
        onClose={closePhoneModal}
      />
    </>
  );
};

export const PhoneInfo = memo(PhoneInfoBase);
