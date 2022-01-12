import { atom, RecoilState } from 'recoil';

export interface loginUserInfoType {
  userId: string;
  userName: string;
}

export interface breadcrumbType {
  path: string;
  title: string;
}

export const systemNameState: RecoilState<string> = atom({
  key: 'systemName',
  default: 'vitereact',
});

export const loginUserInfoState: RecoilState<loginUserInfoType> = atom({
  key: 'loginUserInfo',
  default: {
    userId: '123',
    userName: '2irie',
  },
});

export const breadcrumbState: RecoilState<breadcrumbType[]> = atom({
  key: 'breadcrumb',
  default: [{ path: '/home/index', title: '首页' }],
});
