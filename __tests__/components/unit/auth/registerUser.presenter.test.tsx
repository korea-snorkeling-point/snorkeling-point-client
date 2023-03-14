import RegisterUserUI from '@components/unit/auth/register/registerUser.presenter';
import ERROR_MESSAGE from '@constants/errorMessage';
import PLACEHOLDER from '@constants/placeholder';
import useCreateMailToken from '@hooks/auth/useCreateMailToken';
import useCreateUser from '@hooks/auth/useCreateUser';
import useVerifyMailToken from '@hooks/auth/useVerifyMailToken';
import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('@hooks/auth/useCreateMailToken');
jest.mock('@hooks/auth/useVerifyMailToken');
jest.mock('@hooks/auth/useCreateUser');

const mockUseCreateMailToken = useCreateMailToken as jest.MockedFunction<
  typeof useCreateMailToken
>;

const mockUseVerifyMailToken = useVerifyMailToken as jest.MockedFunction<
  typeof useVerifyMailToken
>;

const mockUseCreateUser = useCreateUser as jest.MockedFunction<
  typeof useCreateUser
>;

describe('RegisterUserUI', () => {
  const customRender = () => {
    render(<RegisterUserUI />);

    const requestCodeButton = screen.getByText('인증요청');
    const verifyCodeButton = screen.getByText('인증확인');
    const registerButton = screen.getByText('회원가입');

    const emailInput = screen.getByPlaceholderText(PLACEHOLDER.EMAIL);
    const genderSelect = screen.getByText(PLACEHOLDER.GENDER);
    const nickNameInput = screen.getByPlaceholderText(PLACEHOLDER.NICKNAME);
    const codeInput = screen.getByPlaceholderText(PLACEHOLDER.VERIFY_CODE);
    const passwordInput = screen.getAllByPlaceholderText(
      PLACEHOLDER.PASSWORD,
    )[0];
    const passwordCheckInput = screen.getAllByPlaceholderText(
      PLACEHOLDER.PASSWORD,
    )[1];

    return {
      registerButton,
      verifyCodeButton,
      requestCodeButton,
      emailInput,
      genderSelect,
      nickNameInput,
      passwordCheckInput,
      passwordInput,
      codeInput,
    };
  };

  it('중복확인을 누르면, xx이 호출된다.', () => {});

  describe('handleClickRequestCode', () => {
    it('인증요청을 누르면, createMailToken이 호출된다.', async () => {
      const createMailToken = jest.fn();
      mockUseCreateMailToken.mockReturnValueOnce(createMailToken);

      const { requestCodeButton } = customRender();

      await userEvent.click(requestCodeButton);

      expect(createMailToken).toBeCalled();
    });

    context('createMailToken 메서드가 예외를 던지는 경우', () => {
      it('에러 메시지를 출력한다.', async () => {
        const errorMsg = 'error message';
        const createMailToken = jest.fn();

        mockUseCreateMailToken.mockReturnValueOnce(
          createMailToken.mockRejectedValueOnce(new Error(errorMsg)),
        );

        const { requestCodeButton } = customRender();

        try {
          await userEvent.click(requestCodeButton);
        } catch (e) {
          expect((e as Error).message).toBe(errorMsg);
        }
      });
    });
  });

  describe('handleClickVerifyCode', () => {
    it('인증확인을 누르면, verifyMailToken이 호출된다.', async () => {
      const verifyMailToken = jest.fn();
      mockUseVerifyMailToken.mockReturnValueOnce(verifyMailToken);

      const { verifyCodeButton } = customRender();

      await userEvent.click(verifyCodeButton);

      expect(verifyMailToken).toBeCalled();
    });

    context('verifyMailToken 메서드가 예외를 던지는 경우', () => {
      it('에러 메시지를 출력한다.', async () => {
        const errorMsg = 'error message';
        const verifyMailToken = jest.fn();

        mockUseVerifyMailToken.mockReturnValueOnce(
          verifyMailToken.mockRejectedValueOnce(new Error(errorMsg)),
        );

        const { verifyCodeButton } = customRender();

        try {
          await userEvent.click(verifyCodeButton);
        } catch (e) {
          expect((e as Error).message).toBe(errorMsg);
        }
      });
    });
  });

  describe('handleClickCreateUser', () => {
    context('모든 입력값이 정상인 경우, 회원가입 버튼을 누르면', () => {
      it('createUser가 호출된다.', async () => {
        const createUser = jest.fn();
        mockUseCreateUser.mockImplementation(() => createUser);

        const {
          registerButton,
          emailInput,
          nickNameInput,
          passwordCheckInput,
          passwordInput,
          codeInput,
        } = customRender();

        await userEvent.type(emailInput, 'aa@aa.aa');
        await userEvent.type(nickNameInput, 'nickName');
        await userEvent.type(passwordCheckInput, '123qwe123');
        await userEvent.type(passwordInput, '123qwe123');
        await userEvent.type(codeInput, '1234');
        await userEvent.click(screen.getByRole('combobox'));
        await userEvent.click(screen.getByText('여자'));

        await userEvent.click(registerButton);

        expect(createUser).toBeCalled();
      });
    });

    context('모든 입력값이 정상값이 아닌 경우, 회원가입 버튼을 누르면', () => {
      it('에러 메시지를 출력한다.', async () => {
        const { registerButton } = customRender();

        await userEvent.click(registerButton);

        [
          ERROR_MESSAGE.AUTH.EMAIL_REQUIRE,
          ERROR_MESSAGE.AUTH.NICKNAME_REQUIRE,
          ERROR_MESSAGE.AUTH.PASSWORD,
          ERROR_MESSAGE.AUTH.GENDER_REQUIRE,
          ERROR_MESSAGE.AUTH.VERIFY_CODE_REQUIRE,
        ].forEach(error => {
          expect(screen.getByText(error)).toBeInTheDocument();
        });
      });
    });
  });
});
