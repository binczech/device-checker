import {
  CloseOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import React, { ReactNode } from 'react';

export type IconType =
    | 'EditOutlined'
    | 'CloseOutlined'
    | 'PlusOutlined';

export const ICONS: Record<IconType, ReactNode> = {
  CloseOutlined: <CloseOutlined />,
  EditOutlined: <EditOutlined />,
  PlusOutlined: <PlusOutlined />,
};
