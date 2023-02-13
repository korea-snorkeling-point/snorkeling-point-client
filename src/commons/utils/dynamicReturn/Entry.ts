/* eslint-disable class-methods-use-this */
export default abstract class Entry<T> {
  abstract readonly name: keyof T | string;

  add(entry: Entry<T>) {
    throw new Error('필드에 하위요소를 추가할 수 없습니다.');
  }

  abstract toQuery(): string;
}
