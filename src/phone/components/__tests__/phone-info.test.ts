import { getButtonText } from '../phone-info';

describe('getButtonText', () => {
  it('phone is not borrowed', () => {
    expect(getButtonText(false, true)).toBe('Borrow');
    expect(getButtonText(false, false)).toBe('Borrow');
  });
  it('phone is borrowed', () => {
    expect(getButtonText(true, true)).toBe('Return');
    expect(getButtonText(true, false)).toBe('Borrowed');
  });
});
