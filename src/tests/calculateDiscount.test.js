
import { calculateDiscount } from '../programs/CalculateDiscount';

describe('calculateDiscount', () => {
  test('correct discount', () => {
    expect(calculateDiscount(1000, 10)).toBe(900);
  });

  test('invalid price throws error', () => {
    expect(() => calculateDiscount(0, 10)).toThrow();
  });

  test('invalid percent throws error', () => {
    expect(() => calculateDiscount(100, 120)).toThrow();
  });
});