import {
  ApolloClient,
  ApolloError,
  ApolloLink,
  ApolloQueryResult,
  FetchResult,
  gql,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import IHttpClient from './types/HttpClient.interface';

export default class ApolloHttpClient implements IHttpClient {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(baseUri: string) {
    const uploadLink = createUploadLink({
      uri: baseUri,
      credentials: 'include',
    });

    this.client = new ApolloClient({
      link: ApolloLink.from([uploadLink]),
      cache: new InMemoryCache(),
    });
  }

  query<T>(query: string, variables?: any): Promise<T> {
    return this.client
      .query<T, any>({
        query: gql`
          ${query}
        `,
        variables,
      })
      .then((res: ApolloQueryResult<T>) => res.data)
      .catch((rej: ApolloError) => {
        throw Error(rej.message);
      });
  }

  mutation<T>(query: string, variables?: any): Promise<T | null | undefined> {
    return this.client
      .mutate<T, any>({
        mutation: gql`
          ${query}
        `,
        variables,
      })
      .then(
        (res: FetchResult<T, Record<string, any>, Record<string, any>>) =>
          res.data,
      )
      .catch((rej: ApolloError) => {
        throw Error(rej.message);
      });
  }
}