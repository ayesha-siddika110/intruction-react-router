import { useLoaderData, useNavigate } from "react-router-dom";


const UserIdData = () => {
    const userIdData = useLoaderData()
    const navigate = useNavigate()
    // console.log(userIdData);
    const {name, id} = userIdData
    const handlegoback =()=>{
        navigate(-1)

    }
    
    return (
        <div>
            <h1>{name}</h1>
            <h2>id : {id}</h2>
            <button onClick={handlegoback}>Go back</button>
            
        </div>
    );
};

export default UserIdData;