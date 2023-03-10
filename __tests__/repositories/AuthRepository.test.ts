import 'reflect-metadata';
import { IUser } from 'src/commons/graphql-types/generated/types';
import AuthRepository from 'src/commons/network/repositories/AuthRepository';
import IHttpClient from 'src/commons/network/types/HttpClient.interface';
import { IAuthRepository } from 'src/commons/network/types/interfaces';
import { anything, instance, mock, reset, when } from 'ts-mockito';

describe('AuthRepository', () => {
  const mockHttpClient = mock<IHttpClient>();
  let authRepository: IAuthRepository;

  beforeEach(() => {
    reset(mockHttpClient);
    authRepository = new AuthRepository(instance(mockHttpClient));
  });

  describe('createUser 메서드', () => {
    context('createUser api 응답이 성공일 때,', () => {
      it('유저 아이디가 문자열을 응답으로 받는다.', async () => {
        const expected: Partial<IUser> = { id: 'userId' };

        when(mockHttpClient.mutation(anything(), anything())).thenResolve(
          expected,
        );

        const actual = await authRepository.createUser({
          email: 'email',
          password: 'password',
          nickname: 'nickname',
          gender: 'gender',
        });

        expect(actual).toEqual(expected.id);
      });

      context('응답 객체가 null 또는 undefined인 경우', () => {
        it('예외를 던진다.', async () => {
          const expected: null | undefined = null;

          when(mockHttpClient.mutation(anything(), anything())).thenResolve(
            expected,
          );

          try {
            await authRepository.createUser({
              email: 'email',
              password: 'password',
              nickname: 'nickname',
              gender: 'gender',
            });
          } catch (e) {
            expect((e as Error).message).toBe('회원가입에 실패했습니다.');
          }
        });
      });
    });
  });
});
