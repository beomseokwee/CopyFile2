import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import GosuMainSection from './GosuMainSection/GosuMainSection';
import {getCookie} from "../../../shared/Cookie";
// import GosuAsideBar from './GosuAsideBar/GosuAsideBar';

function GosuInfo() {
    const submitForm = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                Authorization: getCookie('is_login'),
            },
            body: JSON.stringify({
                // user_id: 12,
                // age: Number(age),
                // service: radioValue.service,
                // career: Number(career),
                // gender: radioValue.gender,
                // region: selectedTown,
                // service_id: 2,
                // email:email,
            }),
        })
            .then(res => res.json())
            .then(()=>{console.log('성공');
                window.location.href='/ChatApp'})
        // 프로필로 변경
        // .then(goToFindGosu());
    };
    // var [introduction,setIntroduction]=useState('안녕하세요 윈터 입니다.')
    const [gosuDetails, setGosuDetails] = useState({
        review_counts:4,
    uploaded_image:'/images/winter8.jpg',
        profile_image:'/images/winter9.png',
        name:'winter',
        main_service:'서빙',
        average_rating:5,
        introduction:'안녕하세요 에스파 윈터 입니다!',
        quotationPrice:'100,000원',
        career:'10',
        region:'서울',
        hired:'30',
        certification:'ok',
        business:'ok',
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



    console.log(`gosuDetails`, gosuDetails);
    return (
        <GosuDetailContainer>
            {Object.keys(gosuDetails).length && (
                <>
                    <GosuMainSection
                        gosuDetails={gosuDetails}
                        gosuInfo={gosuInfo}
                    />
                    {/*<GosuAsideBar*/}
                    {/*    gosuDetails={gosuDetails}*/}
                    {/*    quotationForm={quotationForm}*/}
                    {/*/>*/}
                </>
            )}
            <ReviewMoreBtn onClick={()=>{
                window.location.href='/ChatApp';
                submitForm();
            }}>상담하기</ReviewMoreBtn>
        </GosuDetailContainer>
    );
}
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
const GosuDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;

export default GosuInfo;