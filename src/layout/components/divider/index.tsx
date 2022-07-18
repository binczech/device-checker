import { Divider as AntDivider } from 'antd';
import React, { FunctionComponent, memo } from 'react';

interface Props {
    noMargin?: boolean;
}

const DividerBase: FunctionComponent<Props> = (props) => {
  const { noMargin = true } = props;

  return (
    <AntDivider style={{ margin: noMargin ? 0 : undefined }} />
  );
};

export const Divider = memo(DividerBase);
