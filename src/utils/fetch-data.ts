import { isUndefined } from 'lodash/fp';

import { API_URL } from 'consts';

import { getUser } from './get-user';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchDataProps {
    pathname: string;
    method?: Method;
    // eslint-disable-next-line no-undef
    body?: BodyInit;
}

export const fetchData = async ({
  pathname, body, method = 'GET',
}: FetchDataProps): Promise<Response> => fetch(`${API_URL}${pathname}`, {
  method,
  body,
  headers: {
    Accept: 'application/json',
    ...(!isUndefined(body) ? {
      'Content-Type': 'application/json',
    } : undefined),
  },
});

export const fetchDataWithToken = async ({
  pathname, body, method = 'GET',
}: FetchDataProps): Promise<Response> => {
  const { token } = getUser();

  return fetch(`${API_URL}${pathname}`, {
    method,
    body,
    headers: {
      'Auth-Token': token,
      ...(!isUndefined(body) ? {
        'Content-Type': 'application/json',
      } : undefined),
    },
  });
};
