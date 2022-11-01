import React from 'react';
import{useState} from 'react'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users=useLoaderData()

    const [displayUsers, setDisplayUser]=useState(users)
     
    const handleDelete=user=>{

        const agree=window.confirm(`Are you sure want to delete:${user.names}`)
        if(agree){
                fetch(`http://localhost:5000/users/${user._id}`,{
                    method: 'delete'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert('user deleted successfully')
                        const remaingUsers=displayUsers.filter(usr=>usr._id !==user._id);
                        setDisplayUser(remaingUsers)
                    }
                })
        }
      

    }
    


    return (
        <div>
                <h2>users: {displayUsers.length} </h2>
                {
                    displayUsers.map(user=><p 
                    key={user._id}>
                        {user.names}
                        {user.email}
                         <button onClick={()=>handleDelete (user)}>X</button>
                        
                        
                        </p>)
                }
        </div>
    );
};

export default Home;