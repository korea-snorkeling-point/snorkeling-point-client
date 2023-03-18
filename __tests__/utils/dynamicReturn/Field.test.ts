import { IUser } from 'src/commons/graphql-types/generated/types';
import Field from 'src/commons/utils/dynamicReturn/Field';

describe('Field', () => {
  it('하위에 자식 필드를 추가할 수 없다.', () => {
    const field = new Field<IUser>('email');

    try {
      field.add(new Field<IUser>('gender'));
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toEqual('필드에 하위요소를 추가할 수 없습니다.');
      }
    }
  });

  it('필드의 이름을 출력한다.', () => {
    const field = new Field<IUser>('email');
    expect(field.toQuery()).toBe('email');
  });
});
