import * as S from './normalButton.styles';
import { INormalButtonProps } from './normalButton.types';

export default function NormalButton(props: INormalButtonProps) {
  const { color, onClick, disabled, value } = props;

  return (
    <S.NormalButton
      type="button"
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </S.NormalButton>
  );
}
