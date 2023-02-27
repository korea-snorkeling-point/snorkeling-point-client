import * as S from './decoratedText.styles';
import { IDecoratedTextProps } from './decoratedText.types';

export default function DecoratedText(props: IDecoratedTextProps) {
  const { value, size = FONT_SIZE.SUPPER, ...textProps } = props;
  let fontSize;

  if (size === FONT_SIZE.SUPPER) fontSize = FONT_SIZE.SUPPER;
  if (size === FONT_SIZE.LARGE) fontSize = FONT_SIZE.LARGE;
  if (size === FONT_SIZE.MIDDLE) fontSize = FONT_SIZE.MIDDLE;

  return (
    <S.DecoratedText style={{ fontSize, ...textProps }}>
      <p>{value}</p>
    </S.DecoratedText>
  );
}
