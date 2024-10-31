import { useLoaderData } from "react-router-dom";
import User from "./user";


const Users = () => {
    const users = useLoaderData()
    console.log(users);
    const usersstyle = {
        display : 'grid',
        gridTemplateColumns: 'repeat(3 , 1fr)',
    }
    
    return (
        <div style={usersstyle}>
            {users.map(user=><User key={user.id} user={user}></User>)}
            
        </div>
    );
};

export default Users;