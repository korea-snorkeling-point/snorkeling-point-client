import { ChipText } from '@styles/common.styles';
import * as S from './bestPointItem.styles';

export default function BestPointItem() {
  return (
    <S.Wrapper backgroundImage="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
      <S.ContentWrapper>
        <S.TitleWrapper>삼척 장호항</S.TitleWrapper>
        <S.AddressWrapper>
          <img src="/icon/ic_location_white.svg" alt="location-icon" />
          주소
        </S.AddressWrapper>

        <S.DescriptionWrapper>
          asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf asdfasdfasdfasdfasdf
          asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf
          asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf
          asdfasdfasdfasdfasdf
        </S.DescriptionWrapper>

        <S.TagsWrapper>
          {Array(5)
            .fill('tag')
            .map(e => (
              <ChipText>{e}</ChipText>
            ))}
        </S.TagsWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
