import { Button as AntButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { ButtonHTMLType } from 'antd/lib/button/button';
import classNames from 'classnames';
import React, { FunctionComponent, memo, ReactNode } from 'react';

interface Props {
    type?: ButtonType;
    htmlType?: ButtonHTMLType;
    children?: ReactNode
    fullWidth?: boolean;
    onClick?(): void;
}

const ButtonBase: FunctionComponent<Props> = (props) => {
  const {
    children, type = 'primary', htmlType = 'button', fullWidth, onClick,
  } = props;

  const className = classNames(
    fullWidth && 'w-100',
  );

  return (
    <AntButton
      type={type}
      htmlType={htmlType}
      className={className}
      onClick={onClick}
    >
      {children}
    </AntButton>
  );
};

export const Button = memo(ButtonBase);
