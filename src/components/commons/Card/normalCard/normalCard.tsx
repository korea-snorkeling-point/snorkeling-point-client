import { INormalCard } from './normalCard.types';
import * as S from './normalCard.styles';

export default function NormalCard(props: INormalCard) {
  const { children, onClick } = props;

  return <S.NormalCard onClick={onClick}>{children}</S.NormalCard>;
}
