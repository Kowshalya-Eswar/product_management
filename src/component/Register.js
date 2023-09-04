import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const[username,setUserName] =useState('');
    const navigate = useNavigate();

    useEffect(()=>{
     if(localStorage.getItem(('user-info'))){
        navigate('/add')
     }
    });
    const signUp = async()=>{
        let item ={name,username,password,email}
       let result =await fetch("http://localhost:8000/api/register",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
        result = await result.json();
        localStorage.setItem('user-info',JSON.stringify(result))
        navigate('/add');
    }
    
  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>Register</h1>
      <input type="text" className='form-control'
       placeholder='Name'
       value ={name}
       onChange={(e)=>(setName(e.target.value))}
      />
      <br/>
      <input type="text" className='form-control'
       placeholder='User Name'
       value ={username}
       onChange={(e)=>(setUserName(e.target.value))}
      />
      <br/>
      <input type="password" className='form-control'
       placeholder='password'
       value ={password}
       onChange={(e)=>(setPassword(e.target.value))}
      />
      <br/>
      <input type="text" className='form-control'
       placeholder='email'
       value ={email}
       onChange={(e)=>(setEmail(e.target.value))}
      />
      <br/>
      <Button onClick={signUp} className='btn btn-primary'>Sign up</Button>

    </div>
  )
}

export default Register
