import RoundGradientButton from '@components/commons/button/roundGradientButton/roundGradientButton';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import NormalSelect from '@components/commons/selects/normalSelect/normalSelect';
import DecoratedText from '@components/commons/text/decoratedText/decoratedText';
import {
  CONTENT_PLACEHOLDER,
  TAG_PLACEHOLDER,
  TITLE_PLACEHOLDER,
} from '@constants/placeholder';
import { ErrorText } from '@styles/common.styles';
import * as S from './snorkelingPointWrite.styles';
import { SnorkelingPointWriteUIPropsType } from './snorkelingPointWrite.types';

export default function SnorkelingPointWriteUI(
  props: SnorkelingPointWriteUIPropsType,
) {
  const { control, errors } = props;
  const doOptions = [
    { value: '경기도', label: '경기도' },
    { value: '강원도', label: '강원도' },
    { value: '충청북도', label: '충청북도' },
    { value: '충청남도', label: '충청남도' },
    { value: '전라북도', label: '전라북도' },
    { value: '전라남도', label: '전라남도' },
    { value: '경상북도', label: '경상북도' },
    { value: '경상남도', label: '경상남도' },
  ];
  const siOptions = [
    { value: '서울특별시', label: '서울특별시' },
    { value: '부산광역시', label: '부산광역시' },
    { value: '인천광역시', label: '인천광역시' },
    { value: '대구광역시', label: '대구광역시' },
    { value: '광주광역시', label: '광주광역시' },
    { value: '대전광역시', label: '대전광역시' },
    { value: '울산광역시', label: '울산광역시' },
  ];

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <DecoratedText value="✍🏻 스노클링 포인트 등록" />
      </S.TitleWrapper>

      <S.InputWrapper>
        <NormalInput
          control={control}
          name="title"
          type="text"
          placeholder={TITLE_PLACEHOLDER}
        />
        <ErrorText>{errors.title?.message || ''}</ErrorText>
      </S.InputWrapper>

      <S.Editor placeholder={CONTENT_PLACEHOLDER} />
      <ErrorText>{errors.content?.message || ''}</ErrorText>

      <S.Point>👉🏻 포인트</S.Point>
      <S.SelectWrap>
        <S.Do>
          <NormalSelect control={control} name="do" options={doOptions} />
          <ErrorText>{errors.do?.message || ''}</ErrorText>
        </S.Do>
        <S.Si>
          <NormalSelect control={control} name="si" options={siOptions} />
          <ErrorText>{errors.si?.message || ''}</ErrorText>
        </S.Si>
        <S.DetailPoint>
          <NormalInput control={control} name="detailPoint" type="text" />
          <ErrorText>{errors.detailPoint?.message || ''}</ErrorText>
        </S.DetailPoint>
        <S.SearchBtnWrap>
          <RoundGradientButton value="검색" onClick={() => {}} />
        </S.SearchBtnWrap>
      </S.SelectWrap>
      {/* <Map /> */}

      <S.Tag>👉🏻 태그</S.Tag>
      <S.TagWrap>
        <NormalInput
          control={control}
          name="tag"
          type="text"
          placeholder={TAG_PLACEHOLDER}
        />
        <S.AddBtnWrap>
          <RoundGradientButton value="추가" onClick={() => {}} />
        </S.AddBtnWrap>
      </S.TagWrap>
      {/* <NormalChip /> */}

      <S.SubmitBtnWrap>
        <RoundGradientButton value="완료" onClick={() => {}} />
      </S.SubmitBtnWrap>
    </S.Wrapper>
  );
}
