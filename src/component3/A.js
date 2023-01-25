import { useContext, useRef } from "react";
import UserContext from "../contexts/ContextAPI2";

const A = () => {
    
    //초기값을 구조분해 할당 {state, action}
    const {state, action} = useContext(UserContext);

    //useRef
    const input1 = useRef(null);
    const input2 = useRef(null);

    const handleClick = () => {
        // console.log(input1.current.value)
        // console.log(input2.current.value)

        //action의 사용
        action.setUser({id: input1.current.value, 
                        name:input2.current.value});
    }

    return(
        /* 첫번째 사용방법
        <UserConsumer>
            {
                (value) => (
                    <div>
                        <h3>A컴포넌트</h3>
                        컨텍스트안에 값: {value.state.id}<br/>
                        컨텍스트안에 값: {value.state.name}<br/>
                    </div>
                )
            }
        </UserConsumer>
        */

        /* 2번째 사용법 - useContext Hook을 이용해서 처리 */
        <div>
            <h3>A컴포넌트</h3>
            컨텍스트 안에 값 : {state.id}<br/>
            컨텍스트 안에 값 : {state.name}<br/>
            <div>
                <input type="text" ref={input1}></input>
                <input type="text" ref={input2}></input>
                <button onClick={handleClick}>컨텍스트데이터변경</button>
            </div>
        </div>
    )
}

export default A;