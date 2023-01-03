import * as S from './decoratedText.styles';
import { IDecoratedTextProps } from './decoratedText.types';

export default function DecoratedText(props: IDecoratedTextProps) {
  const { value, size = 'sp', ...textProps } = props;
  let fontSize;

  if (size === 'sp') fontSize = 'sp';
  if (size === 'lg') fontSize = 'lg';
  if (size === 'md') fontSize = 'md';

  return (
    <S.DecoratedText style={{ fontSize, ...textProps }}>
      <p>{value}</p>
    </S.DecoratedText>
  );
}
