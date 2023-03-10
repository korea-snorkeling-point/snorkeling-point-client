import { gql } from 'graphql-request';

export const MUTATION = {
  createUserMutation: (returnValue: string) =>
    gql`
    mutation createUser($createUserInput : CreateUserInput!){
        createUser(createUserInput : $createUserInput){
            ${returnValue}
        }
    }
  `.toString(),
};
export const QUERY = {};
