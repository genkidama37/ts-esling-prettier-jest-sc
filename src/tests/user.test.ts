import { test, expect } from '@jest/globals';
import { Email } from '../domain/user';

test('should not throw exception', () => {
  expect(() => Email.create('hola@ejemplo.com')).not.toThrow();
});

test('should throw exception', () => {
  expect(() => Email.create('holaejemplo.com')).toThrow(Error);
});
