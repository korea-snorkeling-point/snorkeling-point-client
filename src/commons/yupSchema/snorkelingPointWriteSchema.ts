import ERROR_MESSAGE from '@constants/errorMessage';
import * as yup from 'yup';

export const snorkelingPointWriteSchema = yup.object().shape({
  title: yup.string().required(ERROR_MESSAGE.SNORKELING.TITLE),
  content: yup.string().required(ERROR_MESSAGE.SNORKELING.CONTENT),
  do: yup.string().required(ERROR_MESSAGE.SNORKELING.DO),
  si: yup.string().required(ERROR_MESSAGE.SNORKELING.SI),
  detailPoint: yup.string().required(ERROR_MESSAGE.SNORKELING.DETAIL_POINT),
});
