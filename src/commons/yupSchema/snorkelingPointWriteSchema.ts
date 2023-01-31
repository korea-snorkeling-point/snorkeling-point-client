import {
  CONTENT_ERROR_MESSAGE,
  DETAIL_POINT_ERROR_MESSAGE,
  DO_ERROR_MESSAGE,
  SI_ERROR_MESSAGE,
  TITLE_ERROR_MESSAGE,
} from '@constants/errorMessage';
import * as yup from 'yup';

export const snorkelingPointWriteSchema = yup.object().shape({
  title: yup.string().required(TITLE_ERROR_MESSAGE),
  content: yup.string().required(CONTENT_ERROR_MESSAGE),
  do: yup.string().required(DO_ERROR_MESSAGE),
  si: yup.string().required(SI_ERROR_MESSAGE),
  detailPoint: yup.string().required(DETAIL_POINT_ERROR_MESSAGE),
});
