import { useRecoilState } from 'recoil';
import { loginUserInfoState, loginUserInfoType } from '@/models/global';

function UserPage() {
  const [loginUserInfo] = useRecoilState<loginUserInfoType>(loginUserInfoState);
  return (
    <div>
      <h1>UserPage</h1>
      {loginUserInfo.userName}
    </div>
  );
}

export default UserPage;
