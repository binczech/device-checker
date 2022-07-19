import { isUndefined } from 'lodash/fp';

import { Phone } from 'phone/types/phone';
import { PhoneFiltersType } from 'phone/types/phone-filters';

export const getFilteredData = (
  data: Array<Phone>,
  filters: PhoneFiltersType,
): Array<Phone> => data.filter((x) => (!filters.model || x.model.toLowerCase().includes(filters.model.toLowerCase()))
&& (!filters.os || x.os.toLowerCase() === filters.os.toLowerCase())
&& (!filters.vendor || x.vendor.toLowerCase() === filters.vendor.toLowerCase())
&& (!filters.onlyAvailable || isUndefined(x.borrowed)));
