import React, { useEffect } from 'react'
import Message from '../message/Message'
import './Messages.css'
const Messages = ({messages, userId}) => {
    let uniques = [];

    const builder = () => {
        let userIds = []
        messages.forEach(e => {
            userIds.push(e.userId)
        });
        uniques = userIds.filter((x, i, a) => a.indexOf(x) === i)
        return uniques;
    }
    
    useEffect(() => {
        builder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div
            className="chat-container">
            {messages.map((m, i) => 
            <Message 
                key={m._id}
                message={m} 
                currentUuid={userId}
                color={builder()}
            />)}
        </div>
    )
}

export default Messages
