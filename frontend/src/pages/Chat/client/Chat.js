// 채팅창 구성하는곳
import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';

function Chat({socket, gosu,user, room}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList,setMessageList] = useState([]); // 상대방이 보낸 메시지 표시하기위한 변수

    // useEffect(()=>{
    //     sendMessage()
    // },[messageList])

    const sendMessage = async() => {
        if (currentMessage !== ""){ // 메시지가 비어있지않
            const messageData = {
                room: room,
                // author : username,
                gosu : gosu,
                user : user,
                message : currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message",messageData);
            setMessageList((list)=>[...list,messageData]);
            setCurrentMessage("");

            axios.post('https://jsonplaceholder.typicode.com/posts',{
                // chatHistory : messageList,
                msg : messageData.message,
                gosu : messageData.gosu,   // 받는사람
                user : messageData.user, // 보내는사람
                roomnumber : messageData.room,
            }).then(function(res){
                console.log(`성공!!${res.data}`);
                console.log(messageData);
            })

        }
    }

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            setMessageList((list)=>[...list,data])
        })
    },[socket])
    return (
        <div className='chat-window'>
            <div className='chat-header'>
                <p>고수와 채팅</p>
            </div>
            <div className='chat-body'>
                <ScrollToBottom className='message-container'>
                    {messageList.map((messageContent,i)=>{
                        // return <div className='message' id ={username === messageContent.author ? "you" : "other"}>
                        return <div key={i} className='message' id ={gosu === messageContent.gosu ? "you" : "other"}>

                            {/* 여기서 아이디값주는 이유는 css 적용 */}
                            <div>
                                <div className='message-content'>
                                    <p>{messageContent.message}</p>
                                </div>
                                <div className='message-meta'>
                                    <p id="time">{messageContent.time}</p>
                                    {messageContent.gosu != null?
                                        (<p id="gosu">{messageContent.gosu}</p>)
                                        :
                                        (<p id="user">{messageContent.user}</p>)
                                    }

                                </div>
                            </div>
                        </div>
                    })}
                </ScrollToBottom>
            </div>
            <div className='chat-footer'>
                <input type="text"
                       value={currentMessage}
                       placeholder='Hey...'
                       onChange={
                           (event)=>{
                               setCurrentMessage(event.target.value)}}
                       onKeyPress={(event)=>{
                           event.key ==="Enter" && sendMessage()}}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat