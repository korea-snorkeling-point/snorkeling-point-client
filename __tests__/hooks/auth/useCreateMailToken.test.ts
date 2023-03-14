import useCreateMailToken from '@hooks/auth/useCreateMailToken';
import { renderHook } from '@testing-library/react-hooks';

import { useAuthRepository } from 'src/commons/di/containerContext';
import { IAuthRepository } from 'src/commons/network/types/interfaces';
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

describe('useCreateMailToken', () => {
  const mockAuthRepository = mock<IAuthRepository>();
  const customRender = () => renderHook(() => useCreateMailToken());

  beforeEach(() => {
    reset(mockAuthRepository);

    mockUseAuthRepository.mockImplementation(() =>
      instance(mockAuthRepository),
    );
  });

  context('email 값이 정상적으로 들어온 경우', () => {
    it('authRepository의 createMailToken 메서드를 호출한다.', async () => {
      when(
        mockAuthRepository.createMailToken(anything(), anything()),
      ).thenResolve(true);

      const {
        result: { current: createMailToken },
      } = customRender();

      await createMailToken('email');

      verify(mockAuthRepository.createMailToken('email', 'signUp')).once();
    });
  });

  context('email 값이 정상적으로 들어오지 않은 경우', () => {
    it('예외를 던진다', async () => {
      const {
        result: { current: createMailToken },
      } = customRender();

      try {
        await createMailToken('');
      } catch (e) {
        expect((e as Error).message.length).toBeGreaterThan(0);
      }
    });
  });
});
