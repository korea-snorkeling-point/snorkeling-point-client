import { IUser } from 'src/commons/graphql-types/generated/types';
import { IProduct } from 'src/commons/graphqlTypes/generated/types';
import Field from 'src/commons/utils/dynamicReturn/Field';
import ObjectField from 'src/commons/utils/dynamicReturn/ObjectField';

describe('ObjectField', () => {
  it('하위에 자식 필드를 추가할 수 있다.', () => {
    const objectField = new ObjectField<IProduct>('product');

    objectField.add(new Field<IProduct>('title'));
    objectField.add(new Field<IProduct>('address'));

    expect(objectField.toQuery()).toContain('product');
    expect(objectField.toQuery()).toContain('title');
    expect(objectField.toQuery()).toContain('address');
  });

  context('하위 필드 출력', () => {
    context('루트 오브젝트 필드일 경우', () => {
      it('중괄호를 포함하지 않고 하위 필드를 출력한다.', () => {
        const objectField = new ObjectField<IUser>();

        objectField.add(new Field('email'));
        objectField.add(new Field('nickname'));

        const query = objectField.toQuery();

        expect(query).not.toContain('{');
        expect(query).not.toContain('}');
      });
    });

    context('일반 오브젝트 필드일 경우', () => {
      it('중괄호를 포함하고 하위 필드를 출력한다.', () => {
        const objectField = new ObjectField<IProduct>('product');

        objectField.add(new Field('address'));
        objectField.add(new Field('title'));

        const query = objectField.toQuery();

        expect(query).toContain('{');
        expect(query).toContain('}');
      });
    });
  });
});
