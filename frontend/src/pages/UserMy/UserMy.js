import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

//STYLES
import styled from 'styled-components';
import {useSelector} from "react-redux";


function UserMy() {
    const [isToggleHeight, setIsToggleHeight] = useState(false);
    const [matchedLists, setMatchedLists] = useState(['리스트1','리스트2']);
    const user_info = useSelector((state) => state.user.user);
    const viewGosuList = () => {
        setIsToggleHeight(prev => !prev);
    };
    const aaa = { image:'/images/4.jpg'}

    // useEffect(() => {
    //     fetch(`#`, {
    //         headers: {
    //             Authorization: getCookie('access_token'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             setMatchedLists(res.results);
    //         });
    // }, []);
    // const matchedLists =
    return (
        <Container>
            <Box>
                {
                    user_info.role !== 'ROLE_ADMIN' ?
                        (<>
                            <WelcomeName>안녕하세요, {user_info.nickname}님</WelcomeName>
                        <Estimation>받은 요청</Estimation>
                    <GosuListBox onClick={viewGosuList}>
                    <GosuListText>요청온 유저 리스트</GosuListText>
                {isToggleHeight ? (
                    <IoIosArrowUp className="listIcon" />
                    ) : (
                    <IoIosArrowDown className="listIcon" />
                    )}
                    </GosuListBox>
                    <ListWrap className={isToggleHeight ? 'active' : null}>
                {matchedLists.map((matchedList, i) => {
                    return (
                    <List key={i}>
                {/*<ListImg src={matchedList.image} alt="gosu_image" />*/}
                {/*<ListName>{matchedList.master_name}</ListName>*/}
                    </List>
                    );
                })}
                    </ListWrap>
                            </>) :
                    (<>
                        <WelcomeName>안녕하세요, {user_info.nickname}님</WelcomeName>
                    <Estimation>받은 견적</Estimation>
                    <GosuListBox onClick={viewGosuList}>
                    <GosuListText >요청온 고수 리스트</GosuListText>
                {isToggleHeight ? (
                    <IoIosArrowUp className="listIcon" />
                    ) : (
                    <IoIosArrowDown className="listIcon" />
                    )}
                    </GosuListBox>
                    <ListWrap className={isToggleHeight ? 'active' : null}>
                {matchedLists.map((matchedList, i) => {
                    return (
                    <List key={i}>
                    <ListImg alt="gosu_image" src='/images/4.jpg' />
                    <Estimation  style={{marginBottom:'0px',marginLeft:'10px'}}>위범석</Estimation>
                        <Estimation style={{marginBottom:'0px',marginLeft:'70px',color:'red'}} onClick={()=>{
                            window.location.href='/GosuInfo'
                        }}>확인</Estimation>
                    </List>
                    );
                })}
                    </ListWrap>
                    </>)
                }
                {/*<WelcomeName>안녕하세요, {user_info.nickname}님</WelcomeName>*/}
                {/*<Estimation>받은 견적</Estimation>*/}
                {/*<Estimation>프로필</Estimation>*/}
                {/*<GosuListBox onClick={viewGosuList}>*/}
                {/*    <GosuListText>요청온 고수 리스트</GosuListText>*/}
                {/*    {isToggleHeight ? (*/}
                {/*        <IoIosArrowUp className="listIcon" />*/}
                {/*    ) : (*/}
                {/*        <IoIosArrowDown className="listIcon" />*/}
                {/*    )}*/}
                {/*</GosuListBox>*/}
                {/*<ListWrap className={isToggleHeight ? 'active' : null}>*/}
                {/*    {matchedLists.map((matchedList, i) => {*/}
                {/*        return (*/}
                {/*            <List key={i}>*/}
                {/*                <ListImg alt="gosu_image" src='/images/4.jpg' />*/}
                {/*                <ListName>위범석</ListName>*/}
                {/*            </List>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</ListWrap>*/}

            </Box>
            {/*<img alt="인기 서비스" src= {aaa.image} />?*/}
        </Container>
    );
}

export default UserMy;

const Container = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
  position: absolute;
  top: 50px;
  right: 0;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 5px 10px hsla(0, 0%, 0%, 0.4);
  z-index: 11;
  margin-top : 20px;
  margin-right : 80px;
`;

const Box = styled.div`
  ${({ theme }) => theme.flex('center', 'flex-start', 'column')};
`;

const WelcomeName = styled.h2`
  margin-bottom: 30px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: bold;
`;

const Estimation = styled.p`
  margin-bottom: 30px;
  font-size: 15px;
  cursor: pointer;
`;

const GosuListBox = styled.div`
  ${({ theme }) => theme.flex('flex-start', 'center', 'row')};
  margin-bottom: 20px;
  cursor: pointer;
  .listIcon {
    margin-bottom: 3px;
  }
`;

const GosuListText = styled.p`
  padding-right: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const ListWrap = styled.ul`
  width: 100%;
  height: 100px;
  overflow-y: hidden;
  &.active {
    height: auto;
  }
`;

const List = styled.li`
  ${({ theme }) => theme.flex('flex-start', 'center', null)};
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const ListImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ListName = styled.p`
  ${({ theme }) => theme.flex('flex-start', 'center', null)};
  margin: 2px 0 0 10px;
`;