import { Route, Routes } from "react-router-dom";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Home from "./component/Home";
import Info from "./component/Info";
import MyPage from "./component/MyPage";
import User from "./component/User";
import Header from "./layout/Header";

function App() {

  /*
  p.403
  라우터 적용방법

  1. index.js에서 브라우저라우터로 App태그를 감싸준다.
  2. 각각의 컴포넌트를 만든다.
  3. Router를 이요해서 주소별로 컴포넌트를 연결한다.

  Link컴포넌트 
  - a태그를 대체한다.
  - to 속성에 "라우터 주소"를 적어서 이동시키면 된다.

  쿼리스트일 ?키=값
  - useLocation()
  - useSearchParams()

  퀴리param
  - 라우터를 설정 /경로:값
  -useParams() 값을 받습니다.

  */
  return (
    <Routes>
      {/* 중첩라우터 - 헤더 부분처리 (Header에서 Outlet으로 컴포넌트 표기) */}
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>}/>

        {/* 쿼리스트링 */}
        <Route path="/user" element={<User/>}/> 
        
        {/* URL 파라미터 */}
        <Route path="/info/:num" element={<Info/>}/>
      </Route>


      {/* 각각 다른화면이 보인다 */}
      {/* <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> */}

      {/* 중첩라우터 - 공통부분처리 (Board에 가서 Outlet컴포넌트 표기)*/}
      <Route path="/board" element={<Board/>}>
        <Route path=":num" element={<BoardContent/>}></Route>
      </Route>

      {/* navigate 컴포넌트 */}
      <Route path="/mypage" element={<MyPage/>}/>

    </Routes>
  )
}

export default App;
