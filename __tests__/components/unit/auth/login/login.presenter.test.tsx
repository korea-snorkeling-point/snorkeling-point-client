import LoginUI from '@components/unit/auth/login/login.presenter';
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from '@constants/placeholder';
import { act, fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';

jest.spyOn(require('next/router'), 'useRouter');

describe('LoginUI', () => {
  const onClickLoginMock = jest.fn();
  const formMock = renderHook(() => useForm());

  const renderLoginUI = (
    form: UseFormReturn<FieldValues, any> = formMock.result.current,
    handleClickLogin: (payload: any) => void = onClickLoginMock,
  ) => {
    return render(<LoginUI form={form} onClickLogin={handleClickLogin} />);
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
      const handleSubmitMock = formMock.result.current.handleSubmit;
      const { getByText } = renderLoginUI();

      const loginButton = getByText('로그인');

      act(() => {
        fireEvent.click(loginButton);
      });

      // expect().toBeCalled();
    });
  });

  context('회원가입 버튼을 클릭하면', () => {
    it('회원가입 페이지로 이동한다.', () => {
      const { getByText } = renderLoginUI();

      const joinButton = getByText('회원가입');

      fireEvent.click(joinButton);

      // expect(useRouter.asPath).toBe('/auth/join');
    });
  });

  context('비밀번호 재설정 버튼을 클릭하면', () => {
    it('비밀번호 재설정 페이지로 이동한다.', () => {});
  });

  context('이메일을 잘못 입력했으면', () => {
    it('이메일 에러 메세지를 보여준다.', () => {});
  });

  context('비밀번호를 잘못 입력했으면', () => {
    it('비밀번호 에러 메세지를 보여준다.', () => {});
  });
});
