import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';

export const NormalCard = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  ${R.dynamicSize({ attribute: 'padding', px: 24 })}
  ${R.dynamicSize({ attribute: 'marginBottom', px: 16 })}
`;
