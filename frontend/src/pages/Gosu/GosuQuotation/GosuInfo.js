import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import GosuMainSection from './GosuMainSection/GosuMainSection';
// import GosuAsideBar from './GosuAsideBar/GosuAsideBar';

function GosuInfo() {
    const [gosuDetails, setGosuDetails] = useState({
        review_counts:4,
    uploaded_image:'/images/winter8.jpg',
        profile_image:'/images/winter9.png',
        name:'winter',
        main_service:'서빙',
        average_rating:5,
        introduction:'안녕하세요 에스파 윈터 입니다',
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
        </GosuDetailContainer>
    );
}

const GosuDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;

export default GosuInfo;