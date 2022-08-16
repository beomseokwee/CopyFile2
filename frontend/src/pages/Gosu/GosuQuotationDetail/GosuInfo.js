import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import GosuMainSection from './GosuMainSection/GosuMainSection';
import {getCookie} from "../../../shared/Cookie";
// import GosuAsideBar from './GosuAsideBar/GosuAsideBar';

function GosuInfo() {
    var [introduction,setIntroduction]=useState('')
    var [quotationPrice,setQuotationPrice]=useState('')
    var [gosuDetails, setGosuDetails] = useState({
        review_counts:4,
        profile_image:'/images/winter9.png', //이미지
        name:'winter', // // 고수가 가입햇을때 저장된 이름
        category:'서빙', // 고수가 가입햇을때 저장된 서비스
        average_rating:5, //평균 별점
        introduction, // 이건 예외 너가 보내주는 데이터 X 작성할 한줄 소개
        quotationPrice, //이건 예외 너가 보내주는 데이터 X 작성할 견적서 가격
        career:'10',  // 고수가 가입했을때 저장된 경력
        region:'서울', // 고수가 가입했을때 저장된 지역
        hired:'30', // 고용된 횟수
        certification:'ok', // 본인 인증 완료 여부?? 일단 넣음 하드코딩으로 갈지 고민중
        business:'ok', // 본인인증과 동일 하드코딩 or 지울지 고민중
    });
    const [gosuInfo, setGosuInfo] = useState([{name:'윈터',
        rating:4,
    created_at:2022,
    content:'???'},{name:'윈터',
        rating:4,
        created_at:2022,
        content:'???'},{name:'윈터',
        rating:4,
        created_at:2022,
        content:'???'}]);
    const { pathname } = useLocation();
    const params = useParams();
    const {id} = params;
    console.log(id)
    // useEffect(() => {
    //     const { id } = params;
    //
    //     fetch(`/masters/${id}`)
    //         .then(res => res.json())
    //         .then(({ res }) => setGosuDetails(res[0]));
    // }, []);
    //
    // useEffect(() => {
    //     const email = localStorage.getItem('email')
    //     fetch('/')
    //         .then(res => res.json())
    //         .then((res) => {setGosuInfo(res);
    //         console.log(GosuInfo)})
    // }, []);
    const submitForm = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                Authorization: getCookie('is_login'),
            },
            body: JSON.stringify({
                // 고수의 이메일
                introduction:introduction,
                quotationPrice:quotationPrice,
            }),
        })
            .then(res => res.json())
            // .then(goToFindGosu());
            .then((res)=>{
                window.location.href='/';
                console.log(res)
            })
    };

    console.log(introduction);
    console.log(quotationPrice);
    // console.log(`gosuDetails`, gosuDetails);
    return (
        <GosuDetailContainer>
            {Object.keys(gosuDetails).length && (
                <>
                    <GosuMainSection
                        gosuDetails={gosuDetails}
                        gosuInfo={gosuInfo}
                        introduction={introduction}
                        setIntroduction={setIntroduction}
                        quotationPrice={quotationPrice}
                        setQuotationPrice={setQuotationPrice}
                    />
                    {/*<GosuAsideBar*/}
                    {/*    gosuDetails={gosuDetails}*/}
                    {/*    quotationForm={quotationForm}*/}
                    {/*/>*/}
                </>
            )}
            <ReviewMoreBtn onClick={()=>{
                submitForm();
            }}>제출하기</ReviewMoreBtn>
        </GosuDetailContainer>
    );
}

const GosuDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;
const ReviewMoreBtn = styled.button`
  padding: 13px 30px;
  border: 1px solid #dbdbdb;
  border-radius: 40px;
  background-color: orange;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;
export default GosuInfo;