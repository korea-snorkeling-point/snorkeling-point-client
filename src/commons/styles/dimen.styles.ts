import { css } from '@emotion/react';
import * as R from '@styles/responsive.styles';

export const headerSize = 70;

export const sideBarSize = css`
  width: ${R.convertDeskTopRem(250)}rem !important;

  ${R.setNoteBookStyle(css`
    width: ${R.convertNoteBookRem(200)}rem !important;
  `)}

  ${R.setBigTabletStyle(css`
    width: ${R.convertBigTabletRem(130)}rem !important;
  `)}

  ${R.setSmallTabletStyle(css`
    width: ${R.convertSmallTabletRem(80)}rem !important;
  `)}

  ${R.setMobileStyle(css`
    width: 100% !important;
  `)}
`;
