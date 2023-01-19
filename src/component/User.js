import { useSearchParams } from "react-router-dom";


const User = () => {

    //쿼리스트링으로 넘어오는 값을 받기
    //1. useLocation Hook (참고) 
    // const location = useLocation();
    // console.log(location); //객체안의 쿼리스트링 값을 분해해서 사용해야한다 -> 불편....

    //2. useLocation이 불편하기 떄문에 useSearchParams를 사용하는 것이 좋다.
    //배열반환 [값을 조작하거나 수정하는 get set 쿼리스트링을 업데이트하는 함수]
    const[obj, setObj] = useSearchParams();
    console.log(obj);
    let id = obj.get("id");
    let age = obj.get("age");

    //쿼리 스트링 강제로 변경하기
    const handleClick = () => {
        let num = parseInt(age) + 1;
        setObj({id: "변경", age: num});
    }

    return(
        <div>
            <h3>User화면</h3>
            쿼리스트링으로 넘어온 id: {id} <br/>
            쿼리스트링으로 넘어온 age: {age} <br/>

            <button onClick={handleClick}>쿼리스트링 강제수정</button>
        </div>
    )
}

export default User;