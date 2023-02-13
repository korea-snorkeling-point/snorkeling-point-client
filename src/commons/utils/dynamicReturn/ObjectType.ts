import Entry from './Entry';

export default class ObjectType<T> extends Entry<T> {
  private childTypes: Entry<T>[] = [];

  name: keyof T | string;

  constructor(name: keyof T | string) {
    super();
    this.name = name;
  }

  add(type: Entry<T>) {
    this.childTypes.push(type);
    return this;
  }

  toQuery(): string {
    if (this.name === '') {
      return `${this.childTypes.map(type => type.toQuery()).join('\n')}`;
    }

    return `${String(this.name)} {
            ${this.childTypes.map(type => type.toQuery()).join('\n')}
        }`;
  }
}
