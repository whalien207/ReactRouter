import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3>Home화면</h3>
            <ul>
                <li><Link to="/user">회원페이지</Link></li>
                <li><Link to="/user?id=hello&age=1">회원페이지</Link></li>

                <li><Link to="/info/1">info페이지</Link></li>
                <li><Link to="/info/2">info페이지</Link></li>
                <li><Link to="/info/3">info페이지</Link></li>

                {/* 중첩라우터 */}
                <li><Link to="/board">board페이지</Link></li>

                {/* navigate 컴포넌트 */}
                <li><Link to="/mypage">MyPage</Link></li>

            </ul>
        </div>
    )
}

export default Home;