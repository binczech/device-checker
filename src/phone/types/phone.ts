import { Borrowed } from './borrowed';
import { Os } from './os-type';

export interface Phone {
    id: string;
    code: string;
    os: Os;
    vendor: string;
    model: string;
    osVersion: string;
    image?: string;
    borrowed?: Borrowed
}
