import React from 'react'
import './Message.scss'

const Message = ({message, currentUuid, color}) => {
    const colorArray = Array.from(color);
    let isCurrentId = false;
    if(message.userId === currentUuid) {
        isCurrentId = true; 
    }

    return (
        isCurrentId ? (
            <div className="row right-align">
                <div className="col s12 m8 16 right">
                    <p className="sentbyme">{`${message.name}: ${message.text}`}</p>
                </div>
            </div>) : (
            <div className="row left-align">
                <div className="col s12 m8 16 left">
                    <p className={`sentbyother user-${colorArray.indexOf(message.userId)}`}>{`${message.name}: ${message.text}`}</p>
                </div>
            </div>
        )
    )
}

export default Message
