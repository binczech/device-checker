import { Phone } from 'phone/types/phone';

import { getFilteredData } from '../get-filtered-data';

const data: Array<Phone> = [
  {
    id: '1',
    code: '02-M-01',
    os: 'ANDROID',
    vendor: 'SAMSUNG',
    model: 'Galaxy S5 mini',
    osVersion: '6.0.1',
    image: 'https://www.o2.cz/_pub/dc/a7/7b/470494_1130960_SG_S5_mini_black_bigdetail.png',
    borrowed: {
      user: {
        id: '2',
        type: 'admin',
        login: 'gandalf.the.grey@etnetera.cz',
        name: 'Gandalf the Grey',
      },
      date: 1659257212412,
    },
  },
  {
    id: '3',
    code: 'ETN-M-08',
    os: 'IOS',
    vendor: 'APPLE',
    model: 'iPad 2',
    osVersion: '9.3.5',
  },
  {
    id: '4',
    code: 'ETN-M-10',
    os: 'IOS',
    vendor: 'APPLE',
    model: 'iPhone 4',
    osVersion: '7.1.3',
    image: 'https://www.o2.cz/_pub/74/fa/3a/221267_453518_img_049.jpg',
    borrowed: {
      user: {
        id: '2',
        type: 'admin',
        login: 'gandalf.the.grey@etnetera.cz',
        name: 'Gandalf the Grey',
      },
      date: 1659020040152,
    },
  },
  {
    id: '5',
    code: 'ETN-M-11',
    os: 'IOS',
    vendor: 'APPLE',
    model: 'iPhone 5C',
    osVersion: '8.2',
    image: 'https://www.o2.cz/_pub/d3/a9/2a/370728_956446_img_045.jpg',
    borrowed: {
      user: {
        id: '2',
        type: 'admin',
        login: 'gandalf.the.grey@etnetera.cz',
        name: 'Gandalf the Grey',
      },
      date: 1659015635425,
    },
  },
  {
    id: '6',
    code: 'ETN-M-12',
    os: 'WINDOWS',
    vendor: 'ASUS',
    model: 'Lumia 520',
    osVersion: '8.1',
    image: 'https://www.o2.cz/_pub/66/54/63/341374_897054__312885_853121_Nokia_Lumia_520_blue_detail.png',
    borrowed: {
      user: {
        id: '2',
        type: 'admin',
        login: 'gandalf.the.grey@etnetera.cz',
        name: 'Gandalf the Grey',
      },
      date: 1659018557707,
    },
  },
  {
    id: '7',
    code: 'ETN-M-19',
    os: 'ANDROID',
    vendor: 'LENOVO',
    model: 'P70-A',
    osVersion: '4.4.4',
    image: 'https://www.o2.cz/_pub/c7/48/29/409452_1036160_img_045.jpg',
  },
  {
    id: '8',
    code: 'ETN-M-20',
    os: 'ANDROID',
    vendor: 'HUAWEI',
    model: 'G6',
    osVersion: '4.3',
    image: 'https://www.o2.cz/_pub/fb/df/c/371648_956923_img_045.jpg',
    borrowed: {
      user: {
        id: '2',
        type: 'admin',
        login: 'gandalf.the.grey@etnetera.cz',
        name: 'Gandalf the Grey',
      },
      date: 1659014786138,
    },
  },
  {
    id: '9',
    code: 'ETN-M-21',
    os: 'IOS',
    vendor: 'APPLE',
    model: 'iPhone 6 Plus',
    osVersion: '9.2',
    image: 'https://www.o2.cz/_pub/6f/83/da/387173_986009_img_045.jpg',
    borrowed: {
      user: {
        id: '2',
        type: 'admin',
        login: 'gandalf.the.grey@etnetera.cz',
        name: 'Gandalf the Grey',
      },
      date: 1659014787701,
    },
  },
];

const dataOnlyAndroid: Array<Phone> = data.filter((x) => x.os === 'ANDROID');
const dataOnlyIOSiPhone: Array<Phone> = data.filter((x) => x.os === 'IOS' && x.model.includes('iPhone'));
const dataOnlyIOSiPhoneAvailable: Array<Phone> = dataOnlyIOSiPhone.filter((x) => !x.borrowed);
const dataOnlyLenovo: Array<Phone> = data.filter((x) => x.vendor === 'LENOVO'
    && x.model.includes('P70') && !x.borrowed && x.os === 'ANDROID');

describe('getFilteredData', () => {
  it('filters are empty', () => {
    expect(getFilteredData(data, {})).toStrictEqual(data);
    expect(getFilteredData([], {})).toStrictEqual([]);
  });
  it('filters are not empty', () => {
    expect(getFilteredData(data, { os: 'ANDROID' })).toStrictEqual(dataOnlyAndroid);
    expect(getFilteredData(data, { os: 'IOS', model: 'iPhone' })).toStrictEqual(dataOnlyIOSiPhone);
    expect(getFilteredData(data, { os: 'IOS', model: 'iPhone', onlyAvailable: true }))
      .toStrictEqual(dataOnlyIOSiPhoneAvailable);
    expect(getFilteredData(data, {
      vendor: 'LENOVO', model: 'P70', onlyAvailable: true, os: 'ANDROID',
    })).toStrictEqual(dataOnlyLenovo);
    expect(getFilteredData([], { model: 'iPhone' })).toStrictEqual([]);
  });
});
