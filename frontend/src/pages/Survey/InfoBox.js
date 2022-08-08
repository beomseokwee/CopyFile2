import React from 'react';

// STYLES
import styled from 'styled-components';

function InfoBox() {
    return (
        <InfoContainer>
            <InfoTitle>숨고기능 진짜 뒤지게 어렵네 진짜로</InfoTitle>
            <InfoText>
                놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,
                놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,놀고싶다,
            </InfoText>
            <InfoTitle>숨고는 어떤 곳인가요?</InfoTitle>
            <InfoText>
                소개팅 어플이에용~~ㅎㅎㅎㅎ
            </InfoText>
        </InfoContainer>
    );
}

export default InfoBox;

const InfoContainer = styled.div`
  flex: 40%;
  max-width: 500px;
  padding: 1rem 1rem;
`;

const InfoTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const InfoText = styled.p`
  margin-bottom: 2.5rem;
  color: #737373;
  line-height: 1.4;
  white-space: wrap;
`;