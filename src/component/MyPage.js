import { Navigate } from "react-router-dom";

const MyPage = () => {

    //첫번째 렌더링 과정에서는 사용할 수 없다.
    // let loginYN =  useNavigate();
    // if(loginYN === false){
    //     nav('/');
    // }

    //권한이 없다면 리다이렉트
    //replace={true}를설정하면 기록을 남기지 않는다.
    let loginYN = false;
    if(loginYN === false){
        return <Navigate to="/" replace={true}/>
    }

    return(
        <div>
            권한 있는 사람만 접근이 가능함.
        </div>
    )
}

export default MyPage;