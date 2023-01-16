import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from '@constants/errorMessage';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email(EMAIL_ERROR_MESSAGE).required(EMAIL_ERROR_MESSAGE),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/, PASSWORD_ERROR_MESSAGE)
    .required(PASSWORD_ERROR_MESSAGE),
});
