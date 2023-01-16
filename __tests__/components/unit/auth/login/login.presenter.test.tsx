import LoginUI from '@components/unit/auth/login/login.presenter';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import {
  FieldErrorsImpl,
  FieldValues,
  useForm,
  UseFormReturn,
} from 'react-hook-form';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from '@constants/errorMessage';
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from '@constants/placeholder';

describe('LoginUI', () => {
  const onClickLoginMock = jest.fn();
  const formMock = renderHook(() => useForm());

  const renderLoginUI = (
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    > = formMock.result.current.formState.errors,
    form: UseFormReturn<FieldValues, any> = formMock.result.current,
    handleClickLogin: () => void = onClickLoginMock,
  ) => {
    return render(
      <LoginUI
        control={form.control}
        errors={errors}
        onClickLogin={handleClickLogin}
      />,
      {
        wrapper: MemoryRouterProvider,
      },
    );
  };

  it('이메일 입력 인풋이 보인다.', () => {
    const { getByPlaceholderText } = renderLoginUI();

    const emailInput = getByPlaceholderText(EMAIL_PLACEHOLDER);

    expect(emailInput).toBeInTheDocument();
  });

  it('패스워드 입력 인풋이 보인다.', () => {
    const { getByPlaceholderText } = renderLoginUI();

    const passwordInput = getByPlaceholderText(PASSWORD_PLACEHOLDER);

    expect(passwordInput).toBeInTheDocument();
  });

  context('로그인 버튼을 클릭하면', () => {
    it('onClickLogin을 호출한다.', () => {
      const { getByText } = renderLoginUI();

      const loginButton = getByText('로그인');

      fireEvent.click(loginButton);

      expect(onClickLoginMock).toHaveBeenCalled();
    });
  });

  context('회원가입 버튼을 클릭하면', () => {
    it('회원가입 페이지로 이동한다.', () => {
      const { getByText } = renderLoginUI();

      const joinButton = getByText('회원가입');

      fireEvent.click(joinButton);

      expect(mockRouter.asPath).toBe('/auth/join');
    });
  });

  context('비밀번호 재설정 버튼을 클릭하면', () => {
    it('비밀번호 재설정 페이지로 이동한다.', () => {
      const { getByText } = renderLoginUI();

      const resetPasswordButton = getByText('비밀번호 재설정');

      fireEvent.click(resetPasswordButton);

      expect(mockRouter.asPath).toBe('/auth/reset-password');
    });
  });

  context('에러 메세지가 있을 경우', () => {
    it('이메일 에러 메세지를 보여준다.', () => {
      const { getByText } = renderLoginUI({
        email: { type: 'onChange', message: EMAIL_ERROR_MESSAGE },
        password: { type: 'onChange', message: PASSWORD_ERROR_MESSAGE },
      });

      const emailError = getByText(EMAIL_ERROR_MESSAGE);

      expect(emailError).toBeInTheDocument();
    });

    it('비밀번호 에러 메세지를 보여준다.', () => {
      const { getByText } = renderLoginUI({
        email: { type: 'onChange', message: EMAIL_ERROR_MESSAGE },
        password: { type: 'onChange', message: PASSWORD_ERROR_MESSAGE },
      });

      const passwordError = getByText(PASSWORD_ERROR_MESSAGE);

      expect(passwordError).toBeInTheDocument();
    });
  });
});
