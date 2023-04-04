/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import useCreateUser, { CreateUserArgs } from '@hooks/auth/useCreateUser';
import { renderHook } from '@testing-library/react-hooks';
import { useAuthRepository } from 'src/commons/context/ContainerContext';
import IAuthRepository from 'src/commons/network/repositories/AuthRepository/AuthRepository.interface';

import { anything, instance, mock, reset, verify, when } from 'ts-mockito';

jest.mock('src/commons/di/containerContext', () => {
  const origin = jest.requireActual('src/commons/di/containerContext');

  return {
    __esModule: true,
    ...origin,
    useAuthRepository: jest.fn(),
  };
});

const mockUseAuthRepository = useAuthRepository as jest.MockedFunction<
  typeof useAuthRepository
>;

describe('useCreateUser', () => {
  const mockAuthRepository = mock<IAuthRepository>();

  const createUserArgs: CreateUserArgs = {
    email: 'email',
    password: 'password',
    nickname: 'nickname',
    gender: 'gender',
  };

  const customRender = () => {
    return renderHook(() => useCreateUser());
  };

  beforeEach(() => {
    reset(mockAuthRepository);
  });

  describe('createUser 메서드', () => {
    context('createUserArgs에 모든 값이 정상적으로 들어온 경우', () => {
      it('authRepository의 createUser 메서드를 호출한다.', () => {
        when(mockAuthRepository.createUser(anything())).thenResolve('userId');
        const authRepository = instance(mockAuthRepository);

        mockUseAuthRepository.mockImplementation(() => authRepository);

        const {
          result: { current: createUser },
        } = customRender();

        createUser(createUserArgs);

        verify(mockAuthRepository.createUser(anything())).once();
      });
    });

    context('createUserArgs에 값이 정상적으로 들어오지 않은 경우', () => {
      it('예외를 던진다.', async () => {
        const exceptedKey = Object.keys(createUserArgs);
        mockUseAuthRepository.mockImplementation(() =>
          instance(mockAuthRepository),
        );

        const {
          result: { current: createUser },
        } = customRender();

        for (const key of exceptedKey) {
          const copy = { ...createUserArgs };
          copy[key] = '';

          try {
            await createUser(copy);
          } catch (e) {
            expect((e as Error).message.length).toBeGreaterThan(0);
          }
        }
      });
    });
  });
});
