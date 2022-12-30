import HomeOnIcon from 'public/menu/menu_home_on.svg';
import HomeOffIcon from 'public/menu/menu_home_off.svg';
import MarketOnIcon from 'public/menu/menu_shop_on.svg';
import MarketOffIcon from 'public/menu/menu_shop_off.svg';
import MyPageOnIcon from 'public/menu/menu_mypage_on.svg';
import MyPageOffIcon from 'public/menu/menu_mypage_off.svg';
import ChatOnIcon from 'public/menu/menu_chat_on.svg';
import ChatOffIcon from 'public/menu/menu_chat_off.svg';
import BuddyOnIcon from 'public/menu/menu_buddy_on.svg';
import BuddyOffIcon from 'public/menu/menu_buddy_off.svg';

const menus = [
  {
    onIcon: <HomeOnIcon />,
    offIcon: <HomeOffIcon />,
    title: '홈',
    path: '/main',
  },
  {
    onIcon: <MarketOnIcon />,
    offIcon: <MarketOffIcon />,
    title: '중고마켓',
    path: '/market',
  },
  {
    onIcon: <BuddyOnIcon />,
    offIcon: <BuddyOffIcon />,
    title: '버디 모집',
    path: '/buddy',
  },
  {
    onIcon: <ChatOnIcon />,
    offIcon: <ChatOffIcon />,
    title: '채팅',
    path: '/chat',
  },
  {
    onIcon: <MyPageOnIcon />,
    offIcon: <MyPageOffIcon />,
    title: '마이페이지',
    path: '/my-page',
  },
];

export default menus;
