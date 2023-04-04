import useVerifyMailToken from '@hooks/auth/useVerifyMailToken';
import { renderHook } from '@testing-library/react-hooks';

import { useAuthRepository } from 'src/commons/context/containerContext';
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

describe('useVerifyToken', () => {
  const mockAuthRepository = mock<IAuthRepository>();
  const customRender = () => renderHook(() => useVerifyMailToken());

  beforeEach(() => {
    reset(mockAuthRepository);

    mockUseAuthRepository.mockImplementation(() =>
      instance(mockAuthRepository),
    );
  });

  context('email, code 값이 정상적으로 들어온 경우', () => {
    it('authRepository의 verifyEmailToken 메서드를 호출한다.', async () => {
      when(
        mockAuthRepository.verifyMailToken(anything(), anything()),
      ).thenResolve(true);

      const {
        result: { current: createMailToken },
      } = customRender();

      await createMailToken('email', 'code');

      verify(mockAuthRepository.verifyMailToken('email', 'code')).once();
    });
  });

  context('email, code 값이 정상적으로 들어오지 않은 경우', () => {
    it('예외를 던진다', async () => {
      const {
        result: { current: verifyMailToken },
      } = customRender();

      try {
        await verifyMailToken('', 'code');
      } catch (e) {
        expect((e as Error).message.length).toBeGreaterThan(0);
      }

      try {
        await verifyMailToken('email', '');
      } catch (e) {
        expect((e as Error).message.length).toBeGreaterThan(0);
      }
    });
  });

  context('return을 false로 받았을 경우', () => {
    it('예외를 던진다.', async () => {
      when(
        mockAuthRepository.verifyMailToken(anything(), anything()),
      ).thenResolve(false);

      const {
        result: { current: verifyMailToken },
      } = customRender();

      try {
        await verifyMailToken('email', 'code');
      } catch (e) {
        expect((e as Error).message.length).toBeGreaterThan(0);
      }
    });
  });
});
