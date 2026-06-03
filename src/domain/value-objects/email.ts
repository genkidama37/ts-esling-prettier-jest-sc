import { ValidationError } from '../types/errors';

export class Email {
  constructor(public value: string) {
    this.value = value;
  }

  public static create(value: string): Email {
    // Validaciones aqui
    if (!this.isValid(value)) {
      throw new ValidationError('Invalid email');
    }
    return new Email(value);
  }

  public equals(other: Email): boolean {
    return this.value === other.value;
  }

  private static isValid(value: string): boolean {
    if (value.length === 0) {
      return false;
    }
    // regex para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return false;
    }

    return true;
  }
}
