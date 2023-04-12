import { gql } from 'graphql-request';

export const MUTATION = {
  createUserMutation: (returnValue: string) =>
    gql`
    mutation createUser($createUserInput : CreateUserInput!){
        createUser(createUserInput : $createUserInput){
            ${returnValue}
        }
    }
  `,

  verifyMailToken: gql`
    mutation verifyMailToken($email: String!, $code: String!) {
      verifyMailToken(email: $email, code: $code)
    }
  `,

  createMailToken: gql`
    mutation createMailToken($email: String!, $type: String!) {
      createMailToken(email: $email, type: $type)
    }
  `,

  login: gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `,

  restoreAccessToken: gql`
    mutation restoreAccessToken {
      restoreAccessToken
    }
  `,
};
export const QUERY = {};
