import { IAuthDataSource } from '@di/auth.modules';
import AuthRepository from '@repository/authRepository';
import { instance, mock, reset, when } from 'ts-mockito';

describe('AuthRepository', () => {
  const mockAuthDataSource: IAuthDataSource = mock<IAuthDataSource>();

  beforeEach(() => {
    reset(mockAuthDataSource);
  });

  describe('loginUser()', () => {
    context('올바른 값을 입력했을 때', () => {
      it('accessToken 값을 리턴한다.', async () => {
        const input = { email: 'correctEmail', password: 'correctPassword' };
        const expected = 'accessToken';

        when(mockAuthDataSource.loginUser(input)).thenResolve(expected);

        const authRepository = new AuthRepository(instance(mockAuthDataSource));

        const actual = await authRepository.loginUser(input);

        expect(actual).toBe(expected);
      });
    });

    context('올바르지 않은 값이 입력되었을 때', () => {
      it('예외를 던진다.', async () => {
        const input = {
          email: 'incorrectEmail',
          password: 'incorrectPassword',
        };

        const expected = '이메일이 존재하지 않습니다.';

        when(mockAuthDataSource.loginUser(input)).thenThrow(
          new Error(expected),
        );

        const authRepository = new AuthRepository(instance(mockAuthDataSource));

        try {
          await authRepository.loginUser(input);
        } catch (e) {
          if (e instanceof Error) {
            expect(e.message).toBe(expected);
          }
        }
      });
    });
  });
});
