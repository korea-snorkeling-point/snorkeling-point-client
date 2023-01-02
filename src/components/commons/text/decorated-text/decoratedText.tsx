import * as S from './decoratedText.styles';

export default function DecoratedText(props: any) {
  const { value, size = 'super', ...textProps } = props;
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
