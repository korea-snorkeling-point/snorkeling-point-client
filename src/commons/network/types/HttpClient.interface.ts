export default interface IHttpClient {
  query<T>(query: string, variables?: any): Promise<T>;
  mutation<T>(query: string, variables?: any): Promise<T | null | undefined>;
}
