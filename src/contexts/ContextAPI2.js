import { createContext, useState } from "react";


//1. 초기값 설정
const UserContext = createContext({
    state : {id: 'aaa', name: 'bbb'},
    action : {
        setUser: () => {}
    }
})

//2. Provider 정의
// 구조분해 할당은 반드시 children으로 해줘야 한다. 다른이름으로 하면 안됌.
const UserProvider = ({children}) =>{

    const[user, setUser] = useState({id: 'aaa', name: 'bbb'});
    const value = {
        state: user,
        action: {setUser}
    }

    // console.log(children);
    // console.log(value);

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

//3. 컨슈머, 프로바이더 반환
const UserConsumer = UserContext.Consumer;
// 여러개 export 할 수 있다.
export {UserProvider, UserConsumer};

//4. 기본 export - 외부에서 사용해야 하기 때문에..
export default UserContext;