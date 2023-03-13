import ERROR_MESSAGE from '@constants/errorMessage';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(ERROR_MESSAGE.AUTH.EMAIL)
    .required(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      ERROR_MESSAGE.AUTH.PASSWORD,
    )
    .required(ERROR_MESSAGE.AUTH.PASSWORD),
});

export const registerUserSchema = yup.object().shape({
  nickName: yup.string().required(ERROR_MESSAGE.AUTH.NICKNAME_REQUIRE),
  gender: yup.string().required(ERROR_MESSAGE.AUTH.GENDER_REQUIRE),
  email: yup
    .string()
    .email(ERROR_MESSAGE.AUTH.EMAIL)
    .required(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE),
  code: yup.string().required(ERROR_MESSAGE.AUTH.VERIFY_CODE_REQUIRE),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      ERROR_MESSAGE.AUTH.PASSWORD,
    )
    .required(ERROR_MESSAGE.AUTH.PASSWORD),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], ERROR_MESSAGE.AUTH.PASSWORD_CHECK),
});
