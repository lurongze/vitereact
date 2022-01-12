import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginUserInfoState, loginUserInfoType } from '@/models/global';
function IndexPage() {
  const [loginUserInfo, setLoginUserInfo] = useRecoilState<loginUserInfoType>(loginUserInfoState);
  const params = useParams();
  console.log('params', params);
  return (
    <div
      onClick={() =>
        setLoginUserInfo({
          ...loginUserInfo,
          userName: 'hello,userName!',
        })
      }
    >
      Index Page{loginUserInfo.userName}
    </div>
  );
}

export default IndexPage;
