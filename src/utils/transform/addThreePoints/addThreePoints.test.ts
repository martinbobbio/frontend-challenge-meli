import { test, describe, expect } from 'vitest';
import addThreePoints from './addThreePoints';

describe('addThreePoints', () => {
  test('returns an empty string if value is undefined', () => {
    const value: string | undefined = undefined;
    const result = addThreePoints(value, 10);
    expect(result).toBe('');
  });

  test('returns the full value if its length is less than the specified characters', () => {
    const value = 'Hello';
    const result = addThreePoints(value, 10);
    expect(result).toBe(value);
  });

  test('returns a truncated value followed by "..." if its length exceeds the specified characters', () => {
    const value = 'Lorem ipsum dolor sit amet';
    const result = addThreePoints(value, 10);
    expect(result).toBe('Lorem ipsu...');
  });
});
