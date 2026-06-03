import { ValidationError } from '../types/errors';
import { ValueObject } from './value-object';

export class Email extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  public static create(value: string): Email {
    if (!this.isValid(value)) {
      throw new ValidationError('Invalid email');
    }
    return new Email(value);
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
