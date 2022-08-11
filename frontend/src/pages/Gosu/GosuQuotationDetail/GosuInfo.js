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
    uploaded_image:'/images/winter8.jpg',
        profile_image:'/images/winter9.png',
        name:'winter',
        main_service:'서빙',
        average_rating:5,
        introduction,
        quotationPrice,
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