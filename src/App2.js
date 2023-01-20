import { Fragment, useEffect, useState } from "react";


const App = () => {
    /*
    Ajax를 이용해서 외부데이터 가져오기
    1. Promise = fetch()
    */

    const [raw, setRaw] = useState();

    const handleClick = () => {
        // response =>  response.json() 한줄로 나타내면 자동 return이다.
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setRaw(data));
    };

    //화면이 mount된 이후 데이터 가지고 오기 - useEffect()
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); //한번만 실행하기

    return (
        <Fragment>
            <button onClick={handleClick}>데이터가져오기</button>

            {/* 버튼을 클릭해야 raw에 data를 가지고 올 수 있으므로 처음 화면 렌더링 시에 
            undefined 이므로 화면에 띄워줄 것이 없어서 에러가 발생한다. 따라서 raw data가 undefined일 경우에
            처리를 해주어 에러를 해결해주었다. */}
            {
                raw === undefined ?
                    <div>
                        "데이터준비중"
                    </div>
                    :
                    <div>
                        아이디: {raw.userId},
                        비밀번호: {raw.userPW},
                        이름: {raw.userName}
                    </div>

            }

            <h3>mount 이후 데이터 가지고 오기</h3>
            {
                data && 
                <div>
                    아이디: {data.userId}
                    비밀번호: {data.userPw}
                    이름: {data.userName}
                </div>
            }

            {/* 가져온 데이터 : {raw.userId}, {raw.userPW} */}
        </Fragment>
    )
}

export default App;