import React from 'react';
import UserItem from './UserItem'


const Users = (props) => {
    console.log(props.users);
    return(
       <div style={userStyle}>
           {props.users.map((user) => (
            //    <p>{user.login}</p>
            <UserItem user={user} />
           ))}
       </div>
    )
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 2fr)",
    gridgap: "1rem"
}


export default Users;