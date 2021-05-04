import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    const  friendStyle = {
        border: '5px solid blue',
        borderRadius: '10px',
        margin: '50px',
        padding: '10px'
    }
    
    return (
        <div style={friendStyle}>
            <h1 style={{color: 'green', backgroundColor:'goldenrod' , border: '5px solid red'}}>This is Friend Details Components of : {friendId}</h1>
            <h2>Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Web site: {friend.website}</p>
            <button style={{ backgroundColor:'blue', borderRadius:'5px', padding:'10px', color:'white'}} >Add Friend</button>
        </div>
    );
};

export default FriendDetail;