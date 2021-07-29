import React from 'react'
import './Input.css'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form action="" className="form" onSubmit={sendMessage}>
            <input 
                className="input"
                placeholder="Type a message"
                type='text'
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                value={message}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
        </form>
    )
}
