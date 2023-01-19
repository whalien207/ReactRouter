import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from './Header.module.css'

const Header = () => {

    let nav = useNavigate();

    const goHome = () => {
        nav('/'); //경로
    }

    const goBack = () => {
        nav(-1); //뒤로가기 , +1 앞으로가기
    }
    return(
        <Fragment>
            <header className={styled.wrap}>
                <h3>헤더파일</h3>
                <ul className={styled.wrap_list}>
                    <li>목록</li>
                    <li>목록</li>
                    <li>목록</li>
                </ul>
                <div>
                    <button onClick={goHome}>홈화면</button>
                    <button onClick={goBack}>뒤로가기</button>
                </div>
            </header>
            <section>
                {/* 헤더 하위의 라우터 표현 */}
                <Outlet/>
            </section>
        </Fragment>
    )
}

export default Header;