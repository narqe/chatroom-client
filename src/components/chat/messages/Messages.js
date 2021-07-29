import React from 'react'
import Message from '../message/Message'
import './Messages.css'
const Messages = ({messages, userId}) => {
    return (
        <div
            className="chat-container">
            {messages.map((m, i) => 
            <Message 
                key={m._id}
                message={m} 
                currentUuid={userId} 
            />)}
        </div>
    )
}

export default Messages
