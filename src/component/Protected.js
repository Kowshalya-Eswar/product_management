import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct'
const Protected = ({cmp}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem(('user-info'))) {
            navigate('/register')
        }
    });
    return (
        <div>
            {(cmp === 'AddProduct')?
             <AddProduct />:
             <UpdateProduct />
            }
        </div>
    )
}

export default Protected
