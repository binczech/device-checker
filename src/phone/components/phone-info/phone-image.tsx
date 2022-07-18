import { Empty } from 'antd';
import { isUndefined } from 'lodash/fp';
import moment from 'moment';
import React, { FunctionComponent, memo } from 'react';

import { Borrowed } from 'phone/types/borrowed';

import './styles.scss';

interface Props {
    borrowed?: Borrowed;
    image?: string;
}

const PhoneImageBase: FunctionComponent<Props> = (props) => {
  const { borrowed, image } = props;

  return (
    <div className="position-relative">
      {image ? (
        <img src={image} alt="" className="m-auto d-block phone-image" />
      ) : (
        <Empty description="No image available" className="empty-image" />
      )}
      {!isUndefined(borrowed) && (
        <div className="position-absolute borrow-info">
          Borrowed:
          {' '}
          {borrowed.user.name}
          {' '}
          {moment(borrowed.date).format('DD/MM/YYYY')}
        </div>
      )}
    </div>
  );
};

export const PhoneImage = memo(PhoneImageBase);
