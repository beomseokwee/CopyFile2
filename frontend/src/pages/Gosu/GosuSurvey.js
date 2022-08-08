import InfoBox from './GosuInfo';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {getCookie} from "../../shared/Cookie";
import SurveyBox from "./SurveyBox/SurveyBox";


function GosuSurvey(props) {
    const [pageInfo, setPageInfo] = useState([]);
    const [rating, setRating] = useState();
    const history = useHistory();
    const params = useParams();
    console.log(props.test)
    // useEffect(() => {
    //     getInfo();
    // }, []);
    //
    // useEffect(() => {
    //     cuttingRating();
    // }, [pageInfo]);
    //
    // const cuttingRating = () => {
    //     setRating(Math.floor(pageInfo));
    // };


    // const getInfo = () => {
    //     const { id } = params;
    //     console.log(id)
    //     fetch(`/category/${id}`, {
    //         method:'GET',
    //         headers: {
    //             Authorization: getCookie('is_login'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res);
    //             let pageInfo = res;
    //             setPageInfo(pageInfo);
    //             console.log(pageInfo);
    //             console.log(pageInfo.name);
    //             console.log(pageInfo.count1)
    //
    //             // console.log(pageInfo[0])
    //         });
    // };

    return (
        <>

            <SurveyContainer>
                <SurveySection pageInfo = {pageInfo}>
                    <SurveyBox />
                </SurveySection>
            </SurveyContainer>
        </>
    );
}
//pageInfo={pageInfo}
const SurveyContainer = styled.div``;

const SurveySection = styled.div`
  ${({ theme }) => theme.flex('center', 'flex-start', null)}
  width: 750px;
  margin: 1rem auto 0;
  margin-top: 300px;
  
`;

export default GosuSurvey;