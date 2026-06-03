export class Password {
  constructor(public value: string) {
    this.value = value;
  }

  public static create(value: string): Password {
    // Validaciones aqui
    if (!this.isValid(value)) {
      throw new Error('Invalid password');
    }
    return new Password(value);
  }

  public equals(other: Password): boolean {
    return this.value === other.value;
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
