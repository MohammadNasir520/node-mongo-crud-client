import React, { useState } from 'react';

const AddUser = () => {
const [user, setUser]=useState({})

    const handleaddUser=event=>{
        event.preventDefault()
        console.log(user)
        fetch ('http://localhost:5000/users',{
            method: 'post',
            headers:{
                'content-type' : 'application/json'

            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.acknowledged){
            alert('user added successfully')
            event.target.reset()
            }
        })

       
    }
    const handleInputBlur=event=>{
        const value=event.target.value;
        const field = event.target.name;
        const newUser={...user}
        newUser[field]=value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>please add a neW user</h2>
            <form onSubmit={handleaddUser}>
                <input onBlur={handleInputBlur} type="text" name="names"  placeholder='name'/>
                <br />
                <input onBlur={handleInputBlur} type="email" name="email"  placeholder='email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddUser;