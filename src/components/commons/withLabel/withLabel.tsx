import { IWithLabelProps } from './withLabel.types';
import * as S from './withLabel.styles';

export default function WithLabel({
  label,
  children,
  ...styleProps
}: IWithLabelProps) {
  return (
    <S.Wrapper>
      <S.Label fontSizeUnit={styleProps.fontSizeUnit}>{label}</S.Label>
      {children}
    </S.Wrapper>
  );
}
