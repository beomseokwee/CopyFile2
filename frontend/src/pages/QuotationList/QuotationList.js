import React, { useState } from 'react';
import styled from 'styled-components';
import QuotionListData from "./QuotionListData";
const QuotationList = () => {
    const [review, setReview] = useState();
    const setReviewLength = data => {
        setReview(data);
    };
    return (
        <FindGosuForm>
            <Header>
                <GosuTitle>고수 리스트</GosuTitle>
                <GosuTitleSub>지역, 카테고리</GosuTitleSub>
                <FilterGosuForm>
                    <TotalGosu>{review} 명의 고수</TotalGosu>
                </FilterGosuForm>
            </Header>
            <QuotionListData setReviewLength={setReviewLength} />
        </FindGosuForm>
    );
};
const FindGosuForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 50px auto 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 3rem;
`;
const FilterGosuForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 50px;
`;
const TotalGosu = styled.p`
  font-size: 15px;
`;
const GosuTitle = styled.h1`
  font-size: 40px;
  font-weight: bolder;
`;
const GosuTitleSub = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  color: gray;
`;
export default QuotationList;