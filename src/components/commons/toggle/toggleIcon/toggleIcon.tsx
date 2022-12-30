import { ReactNode } from 'react';
import * as S from './toggleIcon.styles';

interface IToggleIconProps {
  onIcon: ReactNode;
  offIcon: ReactNode;
  isOn: boolean;
}

export default function ToggleIcon({
  onIcon,
  offIcon,
  isOn,
}: IToggleIconProps) {
  return <S.Wrapper>{isOn ? onIcon : offIcon}</S.Wrapper>;
}
