export class Id {
  constructor(public value: string) {
    this.value = value;
  }

  public equals(other: Id): boolean {
    return this.value === other.value;
  }
}
