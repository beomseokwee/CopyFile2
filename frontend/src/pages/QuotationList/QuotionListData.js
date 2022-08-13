import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RatingStars } from '../../RatingStars';
import {useSelector} from "react-redux";


function GosuList({ setReviewLength }) {
    const [gosuLists, setGosuLists] = useState([
        {image:'/images/winter9.png',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:1,
            hired:10,
    },
        {image:'/images/winter8.jpg',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:2,
            hired:10,
        },
        {image:'/images/winter7.jpg',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:3,
            hired:10,
        },
        {image:'/images/winter6.jpg',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:4,
            hired:10,
        }]);
    const [userLists, setUserLists] = useState([
        {image:'/images/winter6.jpg',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:1,
            hired:10,
        },
        {image:'/images/4.jpg',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:2,
            hired:10,
        },
        {image:'/images/winter9.png',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:3,
            hired:10,
        },
        {image:'/images/winter6.jpg',
            name:'윈터님',
            introduction:'안녕하세요 윈터입니다~',
            count1:4,
            review:5,
            _idx:4,
            hired:10,
        }]);
    const params = useParams();
    const user_info = useSelector((state) => state.user.user);
    // const { pathname } = location;
    const history = useHistory();
    // useEffect(() => {
    //
    //     fetch(`/applications/services/${id}/masters`, {
    //         headers: {
    //             Authorization: localStorage.getItem('access_token'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             setGosuLists(res);
    //         });
    // }, []);

    const goToGosuDetail = id => {
        window.location.href=`/GosuInfo/${id}`;
    };

    return (
        <>
            {gosuLists.length !=0 &&
                (<GosuListWrap>
             {gosuLists.map((gosuList, i) => {
                const {
                    image,
                    name,
                    introduction,
                    count1,
                    review,
                    _idx,
                    hired,
                } = gosuList;
                console.log(gosuList);
                return (
                    <FindGosu
                        key={i}
                        name={name}
                        onClick={() => goToGosuDetail(_idx)}
                    >
                        <GosuListImg alt="고수 리스트 사진" src={image} />
                        <GosuListForm>
                            <GosuListTitle>{name}</GosuListTitle>
                            <GosuListContent>{introduction}</GosuListContent>
                            <GosuListReviewForm>
                                {count1 && (
                                    <GosuListStar>
                                        별점 : {RatingStars(count1)}
                                    </GosuListStar>
                                )}
                                <GosuListHire>{hired}회 고용됨</GosuListHire>
                            </GosuListReviewForm>
                            <GosuListComment>리뷰 개수 : {review}</GosuListComment>
                        </GosuListForm>
                    </FindGosu>
                );
            })}
                </GosuListWrap>)
            }
        </>
    );
}

export default GosuList;

const GosuListWrap = styled.div`
  width: 100%;
  padding: 0 0 1rem;
  border: none;
  border-radius: 5px;
`;

const FindGosu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #f4f4f4;
  &:hover {
    background: rgb(248, 248, 248);
    box-shadow: rgb(248 248 248) -24px 0px 0px 0px,
      rgb(248 248 248) 24px 0px 0px 0px;
    cursor: pointer;
  }
`;

const GosuListImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const GosuListForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const GosuListTitle = styled.h2`
  font-size: 20px;
  font-weight: bolder;
`;

const GosuListContent = styled.p`
  margin-top: 20px;
  color: gray;
`;

const GosuListReviewForm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const GosuListStar = styled.div`
  font-size: 15px;
`;

const GosuListHire = styled.h2`
  margin-left: 20px;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bolder;
`;

const GosuListComment = styled.h3`
  margin-top: 20px;
  font-size: 15px;
  color: gray;
`;