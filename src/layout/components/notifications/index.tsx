import { notification } from 'antd';

interface NotificationOptions {
    title: string;
    description?: string;
}

export const showError = ({ title, description }: NotificationOptions) => notification.open({
  type: 'error',
  message: title,
  description,
  duration: 0,
});

export const showSuccess = ({ title, description }: NotificationOptions) => notification.open({
  type: 'success',
  message: title,
  description,
});
