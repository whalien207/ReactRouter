import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";

//css
import styled from './NewsList.module.css'

const NewsList = () => {

    //5. 라우터로 들어오는 값(카테고리)에 대한 처리
    const {category} = useParams();
    //카테고리가 없거나 undefined이면 all이구 아니면 카테고리 그대로...전달
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`;
    // console.log(query);

    //1.news 데이터(API) 가져오기
    //0a4521da63c147e4982ac79b22d014ac

    //2.useEffect에서 화면로딩시 데이터처리

    const [data, setData] = useState();
    useEffect( () => {
        // useEffect는 내장함수라 async를 걸면 이상해질수있다. 
        // 그래서 즉시실행 함수를 하나만들고 async걸어준다.
        (async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=51d77c011c5c48b798a1ee0791e9904a`;
            console.log(url);
            let {data: {articles}} = await axios.get(url);
            setData(articles);
            setLoading(true);
        })();
    }, [query]) //6. 변화가 일어날때마다 재실행할 변수 (query값이 변할 때마다.) []에 query를 넣어주었다.

    // console.log(data);
    
    // 3. 데이터 로딩 처리 (데이터가 오기 전에는 state는 undefined)
    const[loading, setLoading] = useState(false);
    if(loading === false){
        return <div>로딩중...</div>
    }


    return (
        <div className={styled.news_container}>
           <h3>오늘의 헤드라인</h3>
           <ul className={styled.news_wrap}>
            {   
                /* 1. url, urlToImage, title, author, description, publishedAt */

                //4. li태그를 component로 변경
                data.map( (item, index) => <NewsArticle key={index+1} item={item}/>)
            }
           </ul>
        </div>
    )
}

export default NewsList;