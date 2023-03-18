import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IStyleProps } from '@styles/types';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import * as S from '@styles/dimen.styles';
import * as R from '@styles/responsive.styles';
import FontStyles from '@styles/font.styles';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.h2(
  (props: IStyleProps) => css`
    width: fit-content;
    font-weight: 900 !important;
    margin-bottom: ${props.marginBottom || 80};
  `,
);

export const InputWrapper = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    margin-bottom: ${props.marginBottom || 20};
  `,
);

export const Editor = styled(ReactQuill)`
  height: 400px;
  margin-bottom: 50px;
`;

export const Point = styled.div`
  ${FontStyles()[900].LARGE}
  margin-bottom: 10px;
`;

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Do = styled.div`
  width: 20%;
`;

export const Si = styled.div`
  width: 20%;
  margin-left: 10px;
`;

export const DetailPoint = styled.div`
  width: 40%;
  margin-left: 10px;
`;

export const SearchBtnWrap = styled.div`
  width: 20%;
  margin-left: 10px;
`;

export const Tag = styled.div`
  ${FontStyles()[900].LARGE}
  margin-bottom: 10px;
`;

export const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddBtnWrap = styled.div`
  width: 25%;
  margin-left: 10px;
`;

export const SubmitBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  > button {
    width: 20% !important;
  }
`;
