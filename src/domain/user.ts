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

export class Id {
  constructor(public value: string) {
    this.value = value;
  }

  public equals(other: Id): boolean {
    return this.value === other.value;
  }
}

// VO Email
export class Email {
  constructor(public value: string) {
    this.value = value;
  }

  public static create(value: string): Email {
    // Validaciones aqui
    if (!this.isValid(value)) {
      throw new Error('Invalid email');
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

export class Name {
  constructor(public value: string) {
    this.value = value;
  }

  public static create(value: string): Name {
    if (!this.isValid(value)) {
      throw new Error('Invalid name');
    }
    return new Name(value);
  }

  private static isValid(value: string): boolean {
    if (value.trim().length === 0) {
      return false;
    }
    return true;
  }
}

export class User {
  constructor(
    public id: Id,
    public name: Name,
    public password: Password,
    public email: Email
  ) {}

  public static create(id: string, name: string, password: string, email: string): User {
    const passwordVO = Password.create(password);
    const idVO = new Id(id);
    const emailVO = Email.create(email);
    const nameVO = Name.create(name);

    return new User(idVO, nameVO, passwordVO, emailVO);
  }

  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }
}
