import { Phone } from './phone';

export type PhoneFormValues = Pick<Phone, 'code' | 'image' | 'model' | 'os' | 'osVersion' | 'vendor'>;
