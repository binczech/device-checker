import { Typography } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import './styles.scss';

declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];

type TitleLevel = typeof TITLE_ELE_LIST[number];

interface Props {
  isSiteTitle?: boolean;
  text: string;
  level?: TitleLevel;
  testId?: string;
}

const TitleBase: FunctionComponent<Props> = (props) => {
  const {
    isSiteTitle,
    level = 3,
    text,
    testId,
  } = props;
  return (
    <div
      className={isSiteTitle ? 'siteTitle' : undefined}
      data-testid={testId}
    >
      <Typography.Title level={level}>
        {text}
      </Typography.Title>
    </div>
  );
};

export const Title = memo(TitleBase);
