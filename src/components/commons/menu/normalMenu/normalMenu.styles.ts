import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Menu } from 'antd';
import * as R from '@styles/responsive.styles';
import * as C from '@styles/colors.styles';

const Padding = () =>
  css({
    '.ant-menu-inline-collapsed >.ant-menu-item': {
      paddingInline: 0,
    },
  });

const Height = (h: string) => {
  return css({
    ':where(.css-dev-only-do-not-override-acm2ia).ant-menu-inline .ant-menu-item ':
      {
        height: h,
        lineHeight: h,
      },
  });
};

export const MenuWrapper = styled(Menu)`
  .ant-menu-item-selected {
    background-color: ${C.grayF6} !important;
  }
  svg {
    transform: scale(0.8);
  }

  ${Padding()}
  ${Height(`${R.convertDeskTopRem(70)}rem`)}
  ${R.dynamicSize({ attribute: 'fontSize', px: 16 })}


  ${R.setNoteBookStyle(css`
    svg {
      transform: scale(0.8);
    }
    ${Height(`${R.convertNoteBookRem(70)}rem`)}
  `)}

  ${R.setBigTabletStyle(css`
    .ant-menu-item {
      position: relative;
    }
    svg {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scale(0.7);
    }
    ${Height(`${R.convertBigTabletRem(70)}rem`)}
  `)}

  ${R.setSmallTabletStyle(css`
    .ant-menu-item {
      position: relative;
    }
    svg {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scale(0.7);
    }
    ${Height(`${R.convertSmallTabletRem(70)}rem`)}
  `)}

  ${R.setMobileStyle(css`
    .ant-menu-item {
      position: relative;
    }
    svg {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scale(0.7);
    }
    ${Height(`${R.convertMobileRem(70)}rem`)}
  `)};
`;
