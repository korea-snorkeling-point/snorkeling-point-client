import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import * as modulesTypes from '@di/auth/modules.types';

@injectable()
export default class AuthRepository implements modulesTypes.IAuthRepository {
  private dataSource: modulesTypes.IAuthDataSource;

  constructor(
    @inject(modulesTypes.AUTH_TYPES.IAuthDataSource)
    dataSource: modulesTypes.IAuthDataSource,
  ) {
    this.dataSource = dataSource;
  }

  loginUser(args: { email: string; password: string }) {
    return this.dataSource.loginUser(args);
  }
}
