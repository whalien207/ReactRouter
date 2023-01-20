import axios from "axios";
import { Fragment, useState } from "react";

const App = () => {

    /* 
    Axios는 비동기를 편하게 처리하는 라이브러리 이다. (fetch로 사용해도 무방하다.)
    - 설치 : npm add axios
    - Axios는 get(), post()함수를 제공한다. 사용 시 return 은 Promise로 받는다.
     */

    const [data, setData] = useState();

    //순서를 보장하지 않는다....
    /*
    const handleClick = () => {
        axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then(response => {
            console.log(response.data);
            console.log(1);
        });

        console.log(2);
        
        axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
        .then(response => {
            console.log(response.data);
            console.log(3);
        });
        
        console.log(4);

        axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
        .then(response => {
            console.log(response.data);
            console.log(5);
        });

        console.log(6);
    }
    */

    //순서를 보장받고 싶다면
    // const handleClick = () => {
    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    //     .then(response => {
    //         console.log(response.data);
    //         console.log(1);

    //         axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //         .then(response => {
    //             console.log(response.data);
    //             console.log(3);

    //             axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //             .then(response => {
    //                 console.log(response.data);
    //                 console.log(5);
    //             });

    //         });

    //     });
    // }


    /*
    async await의 장점
    1. 코드가 간결해진다.
    2. 동기적 호출방식을 보장해준다.
    */
    const handleClick = async() => {
        console.log(1);
        let res1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        console.log(res1.data);

        console.log(2);
        let res2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
        console.log(res2.data);

        console.log(3);
        let res3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
        console.log(res3.data);

    }

    return (

        <Fragment>
            <h3>엑시오스로 데이터 가져오기</h3>
            <button onClick={handleClick}>데이터로드</button>
            {
                data &&
                <div>
                    아이디: {data.userId},
                    비밀번호: {data.userPw},
                    이름: {data.userName},
                </div>
            }
        </Fragment>
    )
}

export default App;