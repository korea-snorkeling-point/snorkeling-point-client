import ERROR_MESSAGE from '@constants/errorMessage';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email(ERROR_MESSAGE.EMAIL).required(ERROR_MESSAGE.EMAIL),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/, ERROR_MESSAGE.PASSWORD)
    .required(ERROR_MESSAGE.PASSWORD),
});
