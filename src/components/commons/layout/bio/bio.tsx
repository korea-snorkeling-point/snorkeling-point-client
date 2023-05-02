import ROUTES from '@constants/routes';
import styled from '@emotion/styled';
import { Avatar as AntAvatar } from 'antd';
import Link from 'next/link';

export default function Bio() {
  // TODO : UserContext에서 유저 정보 가져오기

  const isLogin = true;
  return (
    <Wrapper>
      <Avatar size={64}>?</Avatar>
      {isLogin && (
        <NickNameText>
          <u>아무개 님,</u>
          <br />
          환영합니다.
        </NickNameText>
      )}

      {isLogin || (
        <LoginText>
          <Link href={ROUTES.LOGIN}>
            <u>로그인</u>
          </Link>
          <br />
          해주세요.
        </LoginText>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Avatar = styled(AntAvatar)`
  margin-right: 12px;
`;

const LoginText = styled.p`
  cursor: pointer;
`;

const NickNameText = styled.p``;
