import { ValidationError } from '../types/errors';
import { ValueObject } from './value-object';

export class Password extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  public static create(value: string): Password {
    if (!this.isValid(value)) {
      throw new ValidationError('Invalid password');
    }
    return new Password(value);
  }

  private static isValid(value: string): boolean {
    if (value.length < 8) {
      return false;
    }

    if (!/[A-Z]/.test(value.toUpperCase())) {
      return false;
    }
    if (!/[0-9]/.test(value)) {
      return false;
    }

    return true;
  }
}
