import { Os } from './os-type';

export interface PhoneFiltersType {
    os?: Os;
    vendor?: string;
    model?: string;
    onlyAvailable?: boolean;
}
