import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test getFullYear function
describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = getFullYear();
    const expectedYear = new Date().getFullYear();

    expect(currentYear).toBe(expectedYear);
  });
});

// Test getFooterCopy function
describe('getFooterCopy', () => {
  // Test truthy getFooterCopy function
  it('should return the correct string when given true', () => {
    const returnedString = getFooterCopy(true);
    const expectedString = 'Holberton School';

    expect(returnedString).toBe(expectedString);
  });
  // Test falsy getFooterCopy function
  it('should return the correct string when given false', () => {
    const returnedString = getFooterCopy(false);
    const expectedString = 'Holberton School main dashboard';

    expect(returnedString).toBe(expectedString);
  });
});

// Test getLatestNotification function
describe('getLatestNotification', () => {
  it('should return the correct string', () => {
    const returnedString = getLatestNotification();
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';

    expect(returnedString).toBe(expectedString);
  });
});
