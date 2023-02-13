import { gql } from '@apollo/client';
import { IUser } from 'src/commons/graphql-types/generated/types';
import { IProduct } from 'src/commons/graphqlTypes/generated/types';
import Field from './Field';
import ObjectType from './ObjectType';

const CREATE_USER = (returnData: string) => gql`
  mutation createUser($createUserInput : CreateUserInput!){
    createUser(createUserInput : $createUserInput){
      ${returnData}
    }
  }
`;

const returnValues = new ObjectType<IUser | IProduct>('')
  .add(new Field<IUser>('email'))
  .add(new Field<IUser>('nickname'))
  .add(new Field<IUser>('profileImg'))
  .add(new ObjectType<IProduct>('product').add(new Field<IProduct>('title')))
  .toQuery();

const query = CREATE_USER(returnValues);

/**
 * // 생성된 쿼리
 * mutation createUser($createUserInput : CreateUserInput!){
    createUser(createUserInput : $createUserInput){
      email
      nickname
      profileImg
      product{
        title
      }
    }
  }
 */
