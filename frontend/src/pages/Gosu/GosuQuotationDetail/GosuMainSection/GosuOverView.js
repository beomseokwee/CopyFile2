
import styled from 'styled-components';

import { RatingStars } from '../../../../RatingStars';

function GosuOverview({ gosuDetails }) {
    const { profile_image, name, main_service, average_rating, review_counts } =
        gosuDetails;

    return (
        <Overview>
            <GosuProfileImg alt="고수이미지" src={profile_image} />
            <GosuHeadBox>
                <GosuTitle>{name}</GosuTitle>
                <GosuCategory>{main_service}</GosuCategory>
                <GosuGradeBox>
                    {RatingStars(average_rating)}
                    <GosuGrade>{average_rating}</GosuGrade>
                    <GosuReviewCount>({review_counts}개의 리뷰)</GosuReviewCount>
                </GosuGradeBox>
            </GosuHeadBox>
        </Overview>
    );
}

const Overview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
`;

const GosuProfileImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
`;

const GosuHeadBox = styled.div`
  margin-left: 30px;
`;

const GosuTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
`;

const GosuCategory = styled.h3`
  margin-bottom: 20px;
  color: #737373;
  font-size: 17px;
  font-weight: 400;
`;

const GosuGradeBox = styled.div``;

const GosuGrade = styled.span`
  margin: 0 10px;
  font-size: 20px;
  font-weight: 600;
`;

const GosuReviewCount = styled.span`
  color: #737373;
`;

export default GosuOverview;