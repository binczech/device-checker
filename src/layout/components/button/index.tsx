import { Button as AntButton, Popconfirm } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { ButtonHTMLType } from 'antd/lib/button/button';
import React, { FunctionComponent, memo, ReactNode } from 'react';

import { ICONS, IconType } from '../icons';

interface Props {
    type?: ButtonType;
    htmlType?: ButtonHTMLType;
    children?: ReactNode
    fullWidth?: boolean;
    disabled?: boolean;
    icon?: IconType;
    danger?: boolean;
    title?: string;
    confirm?: boolean;
    testId?: string;
    onClick?(): void;
}

const ButtonBase: FunctionComponent<Props> = (props) => {
  const {
    children,
    type = 'primary',
    htmlType = 'button',
    fullWidth,
    disabled,
    icon,
    danger,
    title,
    confirm,
    testId,
    onClick,
  } = props;

  const button = (
    <AntButton
      type={type}
      htmlType={htmlType}
      block={fullWidth}
      disabled={disabled}
      icon={icon && ICONS[icon]}
      danger={danger}
      title={title}
      onClick={confirm ? undefined : onClick}
      data-testid={testId}
    >
      {children}
    </AntButton>
  );

  return confirm ? (
    <Popconfirm
      title="Are you sure you want to delete this item?"
      okText="Yes"
      onConfirm={onClick}
      okButtonProps={{ id: `confirm-${testId}` }}
    >
      {button}
    </Popconfirm>
  ) : button;
};

export const Button = memo(ButtonBase);
