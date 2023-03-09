const HTTP_CLIENT = {
  IHttpClient: Symbol.for('IHttpClient'),
};

const REPOSITORY = {
  IAuthRepository: Symbol.for('IAuthRepository'),
};

const APP_TYPES = {
  HTTP_CLIENT,
  REPOSITORY,
};

export default APP_TYPES;
