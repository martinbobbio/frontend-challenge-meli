import firstLetterUppercase from './firstLetterUppercase';
import { test, expect } from 'vitest';

test('firstLetterUppercase capitalizes the first letter of the string', () => {
  const value = 'lorem ipsum';
  const result = firstLetterUppercase(value);
  expect(result).toBe('Lorem ipsum');
});
