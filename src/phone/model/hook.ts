import { useMutation, useQuery, useQueryClient } from 'react-query';

import { PHONE_QUERY_NAME } from 'consts';
import { showSuccess } from 'layout';
import { Phone } from 'phone/types/phone';
import { PhoneFormValues } from 'phone/types/phone-form-values';

import {
  createPhone,
  deletePhone, editPhone, fetchPhones, toggleBorrowPhone,
} from './api';

export const useGetPhones = () => useQuery<Array<Phone>, Error>(
  PHONE_QUERY_NAME,
  () => fetchPhones(),
);

export const useToggleBorrowPhone = (phoneId: string, isBorrowed: boolean) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => toggleBorrowPhone(phoneId, isBorrowed),
    {
      onSuccess: () => queryClient.invalidateQueries(PHONE_QUERY_NAME),
    },
  );
};

export const useDeletePhone = (phoneId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => deletePhone(phoneId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(PHONE_QUERY_NAME);
        showSuccess({ title: 'Phone deleted', description: 'Phone has been successfully deleted!' });
      },
    },
  );
};

export const useEditPhone = (phoneId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (phone: PhoneFormValues) => editPhone(phoneId, phone),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(PHONE_QUERY_NAME);
        showSuccess({ title: 'Phone edited', description: 'Phone has been successfully edited!' });
      },
    },
  );
};

export const useCreatePhone = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (phone: PhoneFormValues) => createPhone(phone),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(PHONE_QUERY_NAME);
        showSuccess({ title: 'Phone created', description: 'Phone has been successfully created!' });
      },
    },
  );
};
