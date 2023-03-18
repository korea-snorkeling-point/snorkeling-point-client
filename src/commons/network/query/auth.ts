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

  verifyMailToken: gql`
    mutation verifyMailToken($email: String!, $code: String!) {
      verifyMailToken(email: $email, code: $code)
    }
  `.toString(),

  createMailToken: gql`
    mutation createMailToken($email: String!, $type: String!) {
      createMailToken(email: $email, type: $type)
    }
  `.toString(),
};
export const QUERY = {};
