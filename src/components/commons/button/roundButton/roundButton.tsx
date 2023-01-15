import { INormalButtonProps } from '../normalButton/normalButton.types';
import * as S from './roundButton.styles';

export default function RoundButton({
  color,
  value,
  disabled,
  onClick,
}: INormalButtonProps) {
  return (
    <S.RoundButton color={color} onClick={onClick} disabled={disabled}>
      {value}
    </S.RoundButton>
  );
}
