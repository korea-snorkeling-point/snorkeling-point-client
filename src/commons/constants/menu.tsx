import { IMenuItemData } from 'src/components/commons/menu/normalMenu/normalMenu.types';
import HomeOnIcon from 'public/menu/menu_home_on.svg';
import MarketOnIcon from 'public/menu/menu_shop_on.svg';
import MyPageOnIcon from 'public/menu/menu_mypage_on.svg';
import ChatOnIcon from 'public/menu/menu_chat_on.svg';
import BuddyOnIcon from 'public/menu/menu_buddy_on.svg';

export const menus: IMenuItemData[] = [
  { key: '/main', label: '홈', icon: <HomeOnIcon /> },
  { key: '/market', label: '중고마켓', icon: <MarketOnIcon /> },
  { key: '/buddy', label: '버디 모집', icon: <BuddyOnIcon /> },
  { key: '/chat', label: '채팅', icon: <ChatOnIcon /> },
  { key: '/my-page', label: '마이 페이지', icon: <MyPageOnIcon /> },
];
