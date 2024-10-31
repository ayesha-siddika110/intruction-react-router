/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const navigate = useNavigate()
    const {id, name, username, email} = user
   const usersinglestyle = {
    border: '1px solid green',
    margin: '10px',
    borderRadius: '10px',
    padding : '5px'



   }
   
   const handleview =()=>{
    navigate(`/users/${id}`)
   }

    return (
        <div style={usersinglestyle}>
            <h2>id : {id}</h2>
            <h3>name: {name}</h3>
            <p>username: {username}</p>
            <p>email : {email}</p>
            <Link to={`/users/${id}`}>view dddetails</Link>
            <Link to={`/users/${id}`}><button>Click me</button></Link>
            <button onClick={handleview}>click to view</button>
            
        </div>
    );
};

export default User;