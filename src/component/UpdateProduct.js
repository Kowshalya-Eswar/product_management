import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
const UpdateProduct = () => {
  const {id} = useParams('');
  const [data,setData] = useState([])
  const[name,setName] = useState('');
  const[imagepath,setImagePath] = useState();
  const[description,setDescription] = useState('');
  const[color,setColor] = useState();
  const[price,setPrice] = useState('');
  const navigate = useNavigate();
 useEffect(() => {
  async function fetchData() {
    let result = await fetch("http://localhost:8000/api/show/"+id);
    result = await result.json();
    setData(result);
    setName(result.product_name);
    setImagePath(result.product_image);
    setColor(result.product_color);
    setDescription(result.product_description);
    setPrice(result.product_price);
  }
  fetchData();
}, []); 

const coloroptions = [
  { value: 'black', label: 'Black' },
  { value: 'blue', label: 'Blue' },
  { value: 'brown', label: 'Brown' }
]

const updateProduct = async(id)=>{
  const formData = new FormData()
  formData.append('product_image',imagepath)
  formData.append('product_name',name)
  formData.append('product_description',description)
  formData.append('product_color',color)
  formData.append('product_price',price)
  formData.append('product_shape','na')

  await fetch('http://localhost:8000/api/update/'+id,{
    method:'PUT',
    body:formData
   }
  )
 
  alert("Data has been updated");
  navigate('/productList');
}
  return (
      
      <div className='col-sm-6 offset-sm-3'>
        <h1> Update Product </h1>
      <form id ="updateForm" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" className='form-control' placeholder='name' defaultValue={data.product_name} onChange={(e)=>setName(e.target.value)}/><br />
        <input type="file" className='form-control' placeholder='image path'  onChange={(e)=>setImagePath(e.target.files[0])}/><br />
        <input type="text" className='form-control' placeholder='description' defaultValue={data.product_description} onChange={(e)=>setDescription(e.target.value)}/><br />
        <Select options={coloroptions} className='form-control' placeholder='color' defaultValue={data.product_color} onChange={(e)=>setColor(e.label)}/><br />
        <input type="number" className='form-control' placeholder='price' defaultValue={data.product_price} onChange={(e)=>setPrice(e.target.value)}/><br />
        <img style={{width:100,height:100}} src={"http://localhost:8000/"+data.product_image} alt="product"/><br />
        <br/> <Button type="submit" onClick={()=>updateProduct(id)} className='btn btn-primary'>
          Update Product
        </Button>
      </form>
      
    </div>
  )
}

export default UpdateProduct
