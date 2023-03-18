import * as S from './decoratedText.styles';
import { IDecoratedTextProps } from './decoratedText.types';

export default function DecoratedText(props: IDecoratedTextProps) {
  const { value, size = 'SUPPER', ...textProps } = props;

  return (
    <S.DecoratedText style={{ ...textProps }} fontSizeUnit={size}>
      <p>{value}</p>
    </S.DecoratedText>
  );
}
