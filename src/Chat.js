import React, { useState } from 'react'
import "./Chat.css"
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import axios from './axios'

function Chat({ messages }) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        console.log('value of input is', input);
        await axios.post('/messages/new', {
            message: input,
            name: "Demo app",
            timestamp: "just now",
            received: true
        })
        
        setInput('');
    }

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name  </h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timeStamp">{message.timestamp}</span>
                </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form >
                    <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    type="text" 
                    placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">
                        send a message
                    </button>
                    <Mic />
                </form>
            </div>
        </div>
    )
}

export default Chat
