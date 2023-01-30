import ToggleIcon from '@components/commons/toggle/toggleIcon/toggleIcon';
import { ChipText } from '@styles/common.styles';
import * as C from '@styles/colors.styles';
import * as S from './snorkelingPointCard.styles';
import NormalCard from '../normalCard';

export default function SnorkelingPointCard() {
  const handleClickCard = () => {
    // TODO : 스노클링 상세 페이지로 이동
  };

  return (
    <NormalCard onClick={handleClickCard}>
      <S.HeaderWrapper>
        <S.TitleWrapper>삼척 장호항</S.TitleWrapper>
        <S.LikeWrapper>
          <ToggleIcon
            isOn
            onIcon={<img src="/icon/ic_like_fill.svg" alt="like-icon" />}
            offIcon={<img src="/icon/ic_like_fill.svg" alt="unlike-icon" />}
          />
        </S.LikeWrapper>
      </S.HeaderWrapper>

      <S.ImageWrapper
        src="https://images.unsplash.com/photo-1518467166778-b88f373ffec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        marginBottom={16}
      />

      <S.DescriptionWrapper>
        남는 목숨을 곳이 그들은 생명을 그림자는 우리 봄바람이다. 그림자는 그와
        속에 귀는 구하지 끝까지 없으면 평화스러운 아름다우냐? 없으면 있음으로써
        피에 기관과 두손을 얼마나 이것이다. 대한 꽃이 그들을 기쁘며, 능히 않는
        뿐이다. 우리 불어 가치를 이상은 소리다.이것은 청춘의 철환하였는가?
      </S.DescriptionWrapper>

      <S.AddressWrapper>
        <S.ImageWrapper src="/icon/ic_location_blue.svg" width="24px" />
        <p>강원 삼척시 근덕면 장호리</p>
      </S.AddressWrapper>

      <S.TagsWrppaer>
        {Array(5)
          .fill('tag')
          .map(tag => (
            <ChipText backgroundColor={C.subYellow} color="white">
              {tag}
            </ChipText>
          ))}
      </S.TagsWrppaer>
    </NormalCard>
  );
}
