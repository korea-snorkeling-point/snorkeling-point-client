import styled from '@emotion/styled';
import * as C from '@styles/colors.styles';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';

export const ErrorText = styled.p`
  color: ${C.red};
  ${R.dynamicSize({ attribute: 'marginTop', px: 6 })}
  ${S.setFontSizePico()}
`;
