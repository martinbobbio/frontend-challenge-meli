import { test, expect } from 'vitest';
import amountFormat from './amountFormat';

test('amountFormat returns the number formatted as a string with locale-specific separators', () => {
  const number = 1300000;
  const result = amountFormat(number);
  expect(result).toBe('1.300.000');
});
