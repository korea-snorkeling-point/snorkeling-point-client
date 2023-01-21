import LoginContainer from '@components/unit/auth/login/login.container';
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from '@constants/errorMessage';
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from '@constants/placeholder';
import { IAuthRepository } from '@di/auth/modules.types';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider } from 'src/commons/contexts/authContext';
import { anything, instance, mock, when } from 'ts-mockito';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { JOIN_URL, MAIN_URL, PASSWORD_RESET_URL } from '@constants/router';

jest.mock('@repository/authRepository');

describe('LoginContainer', () => {
  const mockAuthRepository: IAuthRepository = mock<IAuthRepository>();

  const renderLoginContainer = (authRepository = mockAuthRepository) => {
    render(
      <AuthProvider authRepository={authRepository}>
        <LoginContainer />
      </AuthProvider>,
      {
        wrapper: MemoryRouterProvider,
      },
    );

    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    const passwordInput = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    const loginButton = screen.getByText('로그인');
    const goToJoinPageButton = screen.getByText('회원가입');
    const goToPasswordResetButton = screen.getByText('비밀번호 재설정');

    return {
      emailInput,
      passwordInput,
      loginButton,
      goToJoinPageButton,
      goToPasswordResetButton,
    };
  };

  it('이메일을 입력할 수 있다.', async () => {
    const { emailInput } = renderLoginContainer();

    const value = 'my-email';

    await userEvent.type(emailInput, value);

    expect(emailInput).toHaveDisplayValue(value);
  });

  it('비밀번호를 입력할 수 있다.', async () => {
    const { passwordInput } = renderLoginContainer();

    const value = 'my-password';

    await userEvent.type(passwordInput, value);

    expect(passwordInput).toHaveDisplayValue(value);
  });

  context('로그인 버튼을 클릭했을 때', () => {
    context('입력 값이 올바르지 않으면', () => {
      it('에러 메세지를 보여준다.', async () => {
        const { emailInput, passwordInput, loginButton } =
          renderLoginContainer();

        const value = 'my-password';

        await userEvent.type(emailInput, value);
        await userEvent.type(passwordInput, value);
        await userEvent.click(loginButton);

        expect(screen.getByText(EMAIL_ERROR_MESSAGE)).toBeInTheDocument();
        expect(screen.getByText(PASSWORD_ERROR_MESSAGE)).toBeInTheDocument();
      });
    });

    context('로그인에 성공 했으면', () => {
      it('스노클링 리스트 페이지로 이동한다.', async () => {
        when(mockAuthRepository.loginUser(anything())).thenResolve(
          'accessToken',
        );

        const authRepository = instance(mockAuthRepository);

        const { emailInput, passwordInput, loginButton } =
          renderLoginContainer(authRepository);

        await userEvent.type(emailInput, 'aaa@aa.com');
        await userEvent.type(passwordInput, 'password123456');
        await userEvent.click(loginButton);

        expect(mockRouter.asPath).toBe(MAIN_URL);
      });
    });

    // TODO : 로그인 실패 안내 메세지 테스트 필요
    // context('로그인에 실패 했으면', () => {
    //   it('에러 메세지가 보인다.', () => {});
    // });
  });

  context('회원가입 버튼을 누르면', () => {
    it('회원가입 페이지로 이동한다.', async () => {
      const { goToJoinPageButton } = renderLoginContainer();

      await userEvent.click(goToJoinPageButton);

      expect(mockRouter.asPath).toBe(JOIN_URL);
    });
  });

  context('비밀번호 재설정 버튼을 누르면', () => {
    it('비밀번호 재설정 페이지로 이동한다.', async () => {
      const { goToPasswordResetButton } = renderLoginContainer();

      await userEvent.click(goToPasswordResetButton);

      expect(mockRouter.asPath).toBe(PASSWORD_RESET_URL);
    });
  });
});
