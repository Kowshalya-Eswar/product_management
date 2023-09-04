import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

const AddProduct = () => {
  const coloroptions = [
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' },
    { value: 'brown', label: 'Brown' }
  ]
  const[name,setName] = useState('');
  const[imagepath,setImagePath] = useState();
  const[description,setDescription] = useState('');
  const[color,setColor] = useState();
  const[price,setPrice] = useState('');
  const navigate = useNavigate();
  const AddProduct = async()=>{
    console.log(name,imagepath,description,price,color)
    const formData = new FormData()
   formData.append('product_image',imagepath)
   formData.append('product_name',name)
   formData.append('product_description',description)
   formData.append('product_color',color)
   formData.append('product_price',price)
   formData.append('product_shape','na')

   await fetch('http://localhost:8000/api/add',{
     method:'POST',
     body:formData
    }
   )
  
   alert("Data has been saved");
   navigate('/productList');
  }
  return (
    <div className='col-sm-6 offset-sm-3'>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" className='form-control' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/><br />
        <input type="file" className='form-control' placeholder='image path'  onChange={(e)=>setImagePath(e.target.files[0])}/><br />
        <input type="text" className='form-control' placeholder='description'value={description} onChange={(e)=>setDescription(e.target.value)}/><br />
        <Select options={coloroptions} className='form-control' placeholder='color' value={color} onChange={(e)=>setColor(e.label)}/><br />
        <input type="number" className='form-control' placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}/><br />
        <input type="hidden" className='form-control' value='na'/>
        
        <Button type="submit" onClick={()=>AddProduct()} className='btn btn-primary'>
          Add Product
        </Button>
      </form>
      
    </div>
  )
}

export default AddProduct
