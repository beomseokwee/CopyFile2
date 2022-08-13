import * as React from 'react';
import './ChatApp.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import {useHistory} from "react-router-dom";
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';

export default function ChatList() {
    const [value, setValue] = useState('one');
    const history = useHistory();

    const email = localStorage.getItem('email'); // 수정해야할듯 ?
    const role = localStorage.getItem('role');
//
    useEffect(()=>{
        console.log(email,role)
        axios.get(`/chat/list/${email}/${role}`)
            .then(function(res){
                    console.log(res)
                    let data = res.data
                    data.splice(0,1)
                    setChatList((list)=>[...list,data]);
                }
            )
            .catch((error)=>console.log(error))
    },[])

    let [chatList,setChatList] = useState([])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
            </Tabs>
            <ScrollToBottom className='message-container'>
                {
                    chatList.map((a,i)=>{
                        return(
                            <List onClick={()=>{history.push(`/ChatApp/${a[i].room}`)}}>
                                {localStorage.getItem('role') == 'ROLE_USER'
                                    ?
                                    <Name>{a.at(-1).gosu}</Name>
                                    :
                                    <Name>{a.at(-1).user}</Name>}
                                <Msg>{a.at(-1).msg}</Msg>
                                <hr></hr>
                            </List>
                        )
                    })

                }
            </ScrollToBottom>
        </Box>
    );

}

const Box = styled.div`
position: absolute;
width:500px;
height:300px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)
`;

const List = styled.div`
margin-top:30px;

`

const Name = styled.div`
margin-left : 40%;
font-size : 30px;
width : 30%
margin-bottom : 30px;
margin-top : 20px;
`

const Msg = styled.div`
margin-left : 30%;
font-size : 20px;
width : 30%
margin-bottom : 10px;
margin-top : 30px;
color:grey;
`