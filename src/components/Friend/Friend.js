import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} =props.friend;
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
            <h4>Id: <Link to={`/friend/${id}`}>Show details of {id}</Link></h4>
        </div>
    );
};

export default Friend;