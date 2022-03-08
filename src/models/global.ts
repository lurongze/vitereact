import { atom, RecoilState } from 'recoil';
import keyMap from './keyMap';
export interface loginUserInfoType {
  userId: string;
  userName: string;
}

export interface breadcrumbType {
  path: string;
  title: string;
}

export const systemNameState: RecoilState<string> = atom({
  key: keyMap.systemName,
  default: 'vitereact',
});

export const loginUserInfoState: RecoilState<loginUserInfoType> = atom({
  key: keyMap.loginUserInfo,
  default: {
    userId: '123',
    userName: '2irie',
  },
});

export const breadcrumbState: RecoilState<breadcrumbType[]> = atom({
  key: keyMap.breadcrumb,
  default: [{ path: '/home/index', title: '首页' }],
});
