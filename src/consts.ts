import { BaseOptionType } from 'antd/lib/select';

export const API_URL = 'https://js-test-api.etnetera.cz/api/v1';
export const LOGIN_PATHNAME = '/login';
export const HOME_PATHNAME = '/phones';

export const PHONE_QUERY_NAME = 'phones';

export const manufacturerOptions: Array<BaseOptionType> = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Samsung', value: 'Samsung' },
  { label: 'Huawei', value: 'Huawei' },
  { label: 'Xiaomi', value: 'Xiaomi' },
  { label: 'Oppo', value: 'Oppo' },
  { label: 'Vivo', value: 'Vivo' },
  { label: 'Nokia', value: 'Nokia' },
  { label: 'Sony', value: 'Sony' },
  { label: 'LG', value: 'LG' },
  { label: 'Motorola', value: 'Motorola' },
  { label: 'Asus', value: 'Asus' },
  { label: 'Blackberry', value: 'Blackberry' },
  { label: 'Alcatel', value: 'Alcatel' },
  { label: 'ZTE', value: 'ZTE' },
  { label: 'HTC', value: 'HTC' },
  { label: 'Microsoft', value: 'Microsoft' },
  { label: 'Google', value: 'Google' },
];

export const operationSystemOptions: Array<BaseOptionType> = [
  { label: 'Android', value: 'Android' },
  { label: 'iOS', value: 'iOS' },
  { label: 'Windows', value: 'Windows' },
];
