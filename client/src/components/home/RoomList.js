import React, {useContext, useEffect} from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom'
import io from 'socket.io-client'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './Home.css';
let socket;

const RoomList = ({rooms, isActive}) => {
    const ENDPOINT = 'http://localhost:5000'
    const {user} = useContext(UserContext);

    const handleRemoveRoom = (id) => {
        socket.emit('delete-room', (id))
    }

    useEffect(() => {
        socket = io(ENDPOINT)
        return () => {
            socket.emit('bye')
            socket.off()
        }
    }, [ENDPOINT])

    return (
        <List>
            {!!rooms && rooms.map(room => (
                <ListItem key={room._id} className="listItem-room">
                    <Link to={!!isActive ? `/chat/${room._id}/${room.name}` : '#'} >
                        <ListItemText
                            primary={room.name}
                        />
                    </Link>
                    <ListItemSecondaryAction>
                        {room.userCreator === user._id && (
                            <IconButton 
                                aria-label="delete"
                                className="white col delete-btn" 
                                onClick={(ev, value) => handleRemoveRoom(room._id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default RoomList
