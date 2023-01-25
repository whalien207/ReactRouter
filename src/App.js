import A from "./component3/A";
import B from "./component3/B";
import { UserProvider } from "./contexts/ContextAPI2";


const App = () =>{

    /*
    전역데이터관리 ContextAPI

    1. 외부 ContextAPI2의 컨슈머, 프로바이더 export
    2. root에서는 export된 provider로 감싸준다.
    3. 자식 컴포넌트에서는 useContext(컨텍스트명) Hook을 이용해서 데이터를 헨들링
    4. 
    */
    return(
        <UserProvider>
            <A/>
            <B/>
        </UserProvider>
    )
}

export default App;