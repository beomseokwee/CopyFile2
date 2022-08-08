import React, {useState} from 'react';
import { CATEGORY } from './CategoryListData';
import styled from 'styled-components';
import Category from './Category';
import {useHistory} from "react-router-dom";
import {getCookie} from "../../shared/Cookie";
import Slide from "./Slide";
import DetailCategory from "../DetailCategory";





const Main = () => {

    // const [sliders2,setSliders2]=useState([]);
    // useEffect(() => {
    //     getInfo();
    // }, []);
    //
    // const getInfo = () => {
    //     fetch(`/`, {
    //         method:'GET',
    //         headers: {
    //             Authorization: getCookie('is_login'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res);
    //             let sliders2 = res;
    //             setSliders(sliders2);
    //             console.log(sliders2)
    //         });
    // };

    const [sliders, setSliders] = useState([{
        image:'../images/winter5.jpg',
        name:'winter',
        id:'0',
    },{
        image:'../images/4.jpg',
        name:'알바',
        id:'1'},{
        image:'../images/winter6.jpg',
        name:'winter3',
        id:'2'},{
        image:'../images/winter7.jpg',
        name:'winter4',
        id:'3'},{
        image:'../images/winter8.jpg',
        name:'winter5',
        id:'4'}]);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [serviceId, setServiceId] = useState();
    const history = useHistory();
    const token = getCookie('is_login');
    const GoToCategory = serviceId => {
        if (token) {
            setServiceId(serviceId);
            return history.push(`/category/${serviceId}`);
        } else {
            history.push(`/category/${serviceId}`)
        }
    };
    return (
        <>
            <Header1>
                <MainTop>
                    {/*<MainTopTitle src="../images/4.jpg" />*/}
                    <MainTopText>생활의 고수들과 새로운 인연을 맺어보세요!</MainTopText>
                </MainTop>
                {selectedCategory.length !== 0 && (
                <Category
                    GoToCategory={GoToCategory}
                    categories={CATEGORY}
                    setSelectedCategory={setSelectedCategory}
                />
                    )}
            </Header1>
            {sliders.length !== 0 && (
                <Slide sliders={sliders} GoToCategory={GoToCategory} />
            // <DetailCategory sliders={sliders} GoToServey={GoToServey} />
            )}
        </>
    );
}

export default Main;
const Header1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
 
  background-image: url('../images/main.png');
  background-position: center;
  background-repeat: no-repeat;
  animation: gradient 9s ease-in-out infinite;
  animation: slidein 30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  z-index: 1;
  &::before {
    position: absolute;
    width: 100%;
    height: 500px;
    background-color: rgba(0.5, 0.5, 0.5, 0.5);
    content: '';
  }
  @keyframes slidein {
    from {
      background-position: top;
      background-size: 2000px;
    }
    to {
      background-position: -100px -650px;
      background-size: 2200px;
    }
  }
`;

const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 130px;
  align-items: center;
`;

const MainTopTitle = styled.img`
  display: flex;
  width: 250px;
  padding: 10px;
  z-index: 1;
`;
const MainTopText = styled.p`
  margin-top: 15px;
  color: white;
  font-size: 20px;
  z-index: 1;
`;