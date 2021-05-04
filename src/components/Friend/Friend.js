import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const {name, email, id} =props.friend;
    
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid red',
        padding: '5px',
        margin: '5px' ,
        color: 'blue',
        textAlign: 'center',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>

            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;