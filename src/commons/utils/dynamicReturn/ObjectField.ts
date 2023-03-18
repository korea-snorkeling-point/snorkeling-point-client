import Entry from './Entry';

export default class ObjectField<T> extends Entry<T> {
  private childFields: Entry<T>[] = [];

  name: keyof T | string;

  constructor(name: keyof T | string = '') {
    super();
    this.name = name;
  }

  add(field: Entry<T>) {
    this.childFields.push(field);
    return this;
  }

  toQuery(): string {
    if (this.name === '') {
      return `${this.childFields.map(field => field.toQuery()).join('\n')}`;
    }

    return `${String(this.name)} {
            ${this.childFields.map(type => type.toQuery()).join('\n')}
        }`;
  }
}
