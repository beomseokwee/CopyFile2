import './ChatApp.css';
import io from 'socket.io-client'
import {useEffect, useState} from 'react';
import Chat from './Chat';
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import {actionCreators as userActions} from "../../../redux/modules/user";
import {getCookie} from "../../../shared/Cookie";
const socket = io.connect("http://localhost:3001")


function ChatApp() {
    const [room, setRoom] = useState();
    useEffect(()=>{
        getInfo();
    },[])
    const getInfo = () =>{
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                Authorization: getCookie('is_login'),
            },
            body: JSON.stringify({
                email:localStorage.getItem('email')
            }),
        })
            .then(res => res.json())
            // .then(goToFindGosu());
            .then((res)=>{
                console.log(res)
                console.log('보내기 성공 ')
                let room = res.id;
                setRoom(room);
                console.log(room)
            });

    }


    // const user_info = useSelector((state)=>state.user.user);
    // var sender = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    var gosu;
    var user;
    if (role =='ROLE_HELPER'){
        gosu=localStorage.getItem('nickname');
    }else{
        user=localStorage.getItem('nickname');
    }
    console.log(gosu);
    console.log(user);
    console.log(role);

    useEffect(()=>{
        joinRoom()
    },[room]);

    const joinRoom = () =>{
        if(gosu !== null && room !== ""){
            socket.emit("join_room", room);
        }
    } // 유저이름이 있고, 방이름이 있을때만 동작

    return (
        <>
            {
                role ==`ROLE_HELPER`?(
                    <Chat socket={socket} gosu={gosu} room={room}/>
                ):(
                    <Chat socket={socket} user={user} room={room}/>
                )
            }






            </>
        );
}

export default ChatApp;