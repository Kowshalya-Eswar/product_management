import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const login= async()=>{
        let item ={password,email}
       let result =await fetch("http://localhost:8000/api/login",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
        result = await result.json();
        console.log(result.error)
       
       if(result.error){ 
        return <Alert key="danger" variant='danger'>something went wrong</Alert>
       }
       localStorage.setItem('user-info',JSON.stringify(result))
       navigate('/add')
    }
    useEffect(() => {
        if (localStorage.getItem(('user-info'))) {
            navigate('/add')
        }
    });
   
    return (
        <div className='col-sm-6 offset-sm-3'>
        <h1>Login</h1>
        <input type="text" className='form-control'
         placeholder='Email'
         value ={email}
         onChange={(e)=>(setEmail(e.target.value))}
        />
        <br/>
        <input type="password" className='form-control'
         placeholder='password'
         value ={password}
         onChange={(e)=>(setPassword(e.target.value))}
        />
        <br/>
        <Button onClick={login} className='btn btn-primary'>Login</Button>
  
      </div>
    )
}

export default Login
