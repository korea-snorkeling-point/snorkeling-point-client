import Type from './Entry';

export default class Field<T> extends Type<T> {
  name: string | keyof T;

  constructor(name: keyof T) {
    super();
    this.name = name;
  }

  toQuery() {
    return String(this.name);
  }
}
