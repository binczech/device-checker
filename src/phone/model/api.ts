import { Phone } from 'phone/types/phone';
import { PhoneFormValues } from 'phone/types/phone-form-values';
import { fetchDataWithToken } from 'utils/fetch-data';

export const fetchPhones = async (): Promise<Array<Phone>> => {
  const response = await fetchDataWithToken({ pathname: '/phones' });

  const data = response.json();

  return data;
};

export const toggleBorrowPhone = async (phoneId: string, isBorrowed: boolean): Promise<Phone> => {
  const response = await fetchDataWithToken({
    pathname: `/phones/${phoneId}/${isBorrowed ? 'return' : 'borrow'}`,
    method: 'POST',
  });

  const data = response.json();

  return data;
};

export const deletePhone = async (phoneId: string): Promise<Response> => {
  const response = await fetchDataWithToken({
    pathname: `/phones/${phoneId}`,
    method: 'DELETE',
  });

  return response;
};

export const editPhone = async (phoneId: string, phone: PhoneFormValues): Promise<Phone> => {
  const response = await fetchDataWithToken({
    pathname: `/phones/${phoneId}`,
    method: 'PUT',
    body: JSON.stringify(phone),
  });

  const data = response.json();

  return data;
};

export const createPhone = async (phone: PhoneFormValues): Promise<Phone> => {
  const response = await fetchDataWithToken({
    pathname: '/phones',
    method: 'POST',
    body: JSON.stringify(phone),
  });

  const data = response.json();

  return data;
};
