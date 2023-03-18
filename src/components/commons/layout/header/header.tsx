import { SearchOutlined } from '@ant-design/icons';

import SearchInput from '@components/commons/inputs/searchInput/searchInput';
import NormalSelect from '@components/commons/selects/normalSelect/normalSelect';
import { useForm } from 'react-hook-form';

import * as S from './header.styles';

const doOptions = [
  { value: '경기도', label: '경기도' },
  { value: '강원도', label: '강원도' },
  { value: '충청북도', label: '충청북도' },
  { value: '충청남도', label: '충청남도' },
  { value: '전라북도', label: '전라북도' },
  { value: '전라남도', label: '전라남도' },
  { value: '경상북도', label: '경상북도' },
  { value: '경상남도', label: '경상남도' },
];
const siOptions = [
  { value: '서울특별시', label: '서울특별시' },
  { value: '부산광역시', label: '부산광역시' },
  { value: '인천광역시', label: '인천광역시' },
  { value: '대구광역시', label: '대구광역시' },
  { value: '광주광역시', label: '광주광역시' },
  { value: '대전광역시', label: '대전광역시' },
  { value: '울산광역시', label: '울산광역시' },
];

export default function Header() {
  const { control } = useForm();

  return (
    <S.HeaderWrapper>
      <S.ContentsWrapper>
        <S.SearchBarWrapper>
          <S.SelectWrapper>
            <NormalSelect
              control={control}
              name="do"
              options={doOptions}
              placeholder="도를 선택해 주세요."
            />
          </S.SelectWrapper>

          <S.SelectWrapper>
            <NormalSelect
              control={control}
              name="si"
              options={siOptions}
              placeholder="시를 선택해 주세요."
            />
          </S.SelectWrapper>

          <SearchInput
            control={control}
            name="keyword"
            placeholder="자세한 위치를 입력해 주세요."
            onSearch={value => {
              // TODO
            }}
          />
        </S.SearchBarWrapper>

        <S.SearchIconWrapper>
          <SearchOutlined />
        </S.SearchIconWrapper>

        <S.LogoWrapper>
          <img src="/image/logo.png" alt="logo" />
          Snorkeling
        </S.LogoWrapper>
      </S.ContentsWrapper>
    </S.HeaderWrapper>
  );
}
