import { INormalButtonProps } from '../normalButton.types';
import * as S from './roundGradientButton.styles';

export default function RoundGradientButton({
  value,
  onClick,
  disabled = false,
}: Omit<INormalButtonProps, 'color'>) {
  return (
    <S.RoundGradientButtonWrapper onClick={onClick} disabled={disabled}>
      {value}
    </S.RoundGradientButtonWrapper>
  );
}
