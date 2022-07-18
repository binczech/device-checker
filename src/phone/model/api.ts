import { API_URL } from 'consts';
import { Phone } from 'phone/types/phone';
import { PhoneFormValues } from 'phone/types/phone-form-values';
import { getUser } from 'utils/get-user';

export const fetchPhones = async (): Promise<Array<Phone>> => {
  const { token } = getUser();

  const response = await fetch(`${API_URL}/phones`, {
    method: 'GET',
    headers: {
      'Auth-Token': token,
    },
  });

  const data = response.json();

  return data;
};

export const toggleBorrowPhone = async (phoneId: string, isBorrowed: boolean): Promise<Phone> => {
  const { token } = getUser();

  const response = await fetch(`${API_URL}/phones/${phoneId}/${isBorrowed ? 'return' : 'borrow'}`, {
    method: 'POST',
    headers: {
      'Auth-Token': token,
    },
  });

  const data = response.json();

  return data;
};

export const deletePhone = async (phoneId: string): Promise<Response> => {
  const { token } = getUser();

  const response = await fetch(`${API_URL}/phones/${phoneId}`, {
    method: 'DELETE',
    headers: {
      'Auth-Token': token,
    },
  });

  return response;
};

export const editPhone = async (phoneId: string, phone: PhoneFormValues): Promise<Phone> => {
  const { token } = getUser();

  const response = await fetch(`${API_URL}/phones/${phoneId}`, {
    method: 'PUT',
    body: JSON.stringify(phone),
    headers: {
      'Auth-Token': token,
      'Content-Type': 'application/json',
    },
  });

  const data = response.json();

  return data;
};

export const createPhone = async (phone: PhoneFormValues): Promise<Phone> => {
  const { token } = getUser();

  const response = await fetch(`${API_URL}/phones`, {
    method: 'POST',
    body: JSON.stringify(phone),
    headers: {
      'Auth-Token': token,
      'Content-Type': 'application/json',
    },
  });

  const data = response.json();

  return data;
};
