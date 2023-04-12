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
import IHttpClient from './HttpClient.interface';

export default class ApolloHttpClient implements IHttpClient {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(baseUri: string, links?: ApolloLink[]) {
    this.client = new ApolloClient({
      link: ApolloLink.from([...(links || [])]),
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
