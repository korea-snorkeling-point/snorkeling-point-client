import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';

export const DecoratedText = styled.div(
  (props: any) => css`
    p {
      position: relative;
    }

    p::before {
      content: '';
      position: absolute;
      bottom: 3px;
      width: 100%;
      left: 0;
      height: 8px;
      border-radius: 2px;
      background: linear-gradient(273.41deg, rgba(84, 111, 255, 0.14) -22.5%, #63eded 100%);
      opacity: 0.8;
    }

    ${R.setDeskTopStyle(css`
      font-size: 
        ${props.style.fontSize === 'sp' ? `${S.DeskTopFontSizeSupper}rem` : ''}
        ${props.style.fontSize === 'lg' ? `${S.DeskTopFontSizeLg}rem` : ''}
        ${props.style.fontSize === 'md' ? `${S.DeskTopFontSizeMiddle}rem` : ''};
    `)}

    ${R.setNoteBookStyle(css`
      font-size: 
        ${props.style.fontSize === 'sp' ? `${S.NoteBookFontSizeSupper}rem` : ''}
        ${props.style.fontSize === 'lg' ? `${S.NoteBookFontSizeLg}rem` : ''}
        ${props.style.fontSize === 'md' ? `${S.NoteBookFontSizeMiddle}rem` : ''};
    `)}

    ${R.setBigTabletStyle(css`
      font-size: 
        ${props.style.fontSize === 'sp' ? `${S.BigTabletFontSizeSupper}rem` : ''}
        ${props.style.fontSize === 'lg' ? `${S.BigTabletFontSizeLg}rem` : ''}
        ${props.style.fontSize === 'md' ? `${S.BigTabletFontSizeMiddle}rem` : ''};
    `)}

    ${R.setSmallTabletStyle(css`
      font-size: 
        ${props.style.fontSize === 'sp' ? `${S.SmallTabletFontSizeSupper}rem` : ''}
        ${props.style.fontSize === 'lg' ? `${S.SmallTabletFontSizeLg}rem` : ''}
        ${props.style.fontSize === 'md' ? `${S.SmallTabletFontSizeMiddle}rem` : ''};
    `)}

    ${R.setMobileStyle(css`
      font-size: 
        ${props.style.fontSize === 'sp' ? `${S.MobileFontSizeSupper}rem` : ''}
        ${props.style.fontSize === 'lg' ? `${S.MobileFontSizeLg}rem` : ''}
        ${props.style.fontSize === 'md' ? `${S.MobileFontSizeMiddle}rem` : ''};
    `)}
  `,
);
