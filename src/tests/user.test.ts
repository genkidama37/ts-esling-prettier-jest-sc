import { test, expect } from '@jest/globals';
import { Email, Password, User } from '../domain/user';

const validEmail = 'hola@ejemplo.com';
const invalidEmail = 'holaejemplo.com';
const validPassword = 'prisma123';
const invalidPassword = 'prisma';

const id = '123';
const name = 'John Doe';
const password = validPassword;
const email = validEmail;

// El usuario debe tener nombre, email y password como obligatorios
test('should create a user with valid name, email and password', () => {
  expect(() => User.create(id, name, password, email)).not.toThrow();
});

// No es posible crear un usuario sin nombre
test('throws exception when creating a user without name', () => {
  expect(() => User.create(id, '', password, email)).toThrow(Error);
});

// Email Válido

test('should not throw exception when email is valid', () => {
  expect(() => Email.create(validEmail)).not.toThrow();
});

// Email Inválido
test('throws exception when email is invalid', () => {
  expect(() => Email.create(invalidEmail)).toThrow(Error);
});

// Password Válido
test('should not throw exception when password is valid', () => {
  expect(() => Password.create(validPassword)).not.toThrow();
});

// Password Inválido
test('throws exception when password is invalid', () => {
  expect(() => Password.create(invalidPassword)).toThrow(Error);
});

// Dos instancias de Email con el mismo valor son iguales
test('two Email instances with the same value are equal', () => {
  const email1 = Email.create(validEmail);
  const email2 = Email.create(validEmail);
  expect(email1.equals(email2)).toBe(true);
});

// Dos instancias de Password con el mismo valor son iguales
test('two Password instances with the same value are equal', () => {
  const password1 = Password.create(validPassword);
  const password2 = Password.create(validPassword);
  expect(password1.equals(password2)).toBe(true);
});

// Dos instancias de user con el mismo id deben ser iguales
test('two User instances with the same id are equal', () => {
  const user1 = User.create(id, name, password, email);
  const user2 = User.create(id, name, password, email);
  expect(user1.equals(user2)).toBe(true);
});

// Dos instancias de user con diferente id no deben ser iguales
test('two User instances with different id are not equal', () => {
  const user1 = User.create(id, name, password, email);
  const user2 = User.create('456', name, password, email);
  expect(user1.equals(user2)).toBe(false);
});
