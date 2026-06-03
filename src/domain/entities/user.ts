import { ValidationError } from '../types/errors';
import { Password, Id, Email } from '../value-objects';

export class User {
  constructor(
    public id: Id,
    public name: string,
    public password: Password,
    public email: Email
  ) {}

  public static create(id: string, name: string, password: string, email: string): User {
    const passwordVO = Password.create(password);
    const idVO = new Id(id);
    const emailVO = Email.create(email);
    if (name.trim().length === 0) {
      throw new ValidationError('Invalid name');
    }

    return new User(idVO, name, passwordVO, emailVO);
  }

  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }
}
