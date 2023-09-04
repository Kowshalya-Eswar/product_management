import React, { useEffect, useState } from 'react'
import { Card,Button } from 'react-bootstrap';
import {add} from '../store/cartSlice'
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import { Alert } from 'react-bootstrap';
import StatusCode from '../utils/StatusCode';
const Home =()=> {
    const dispatch = useDispatch();
    const [productList,setProductList] = useState([]);
    const {data: products,status} = useSelector(state=>state.products)
    const searchItem = useSelector(state =>state.productFilter)
    useEffect(()=>{
      dispatch(getProducts());
    },[]);
    
    useEffect(()=>{
      if(searchItem!==''){

        const FilteredResults = products.filter((product)=>((product.product_name).toLowerCase()).includes((searchItem.search) .toLowerCase()))
        setProductList(FilteredResults)
      } else{
        setProductList(products)
      }
    },[products,searchItem])
    
    if(status===StatusCode.LOADING){
      return <p>Loading...</p>;
    }

    if(status===StatusCode.ERROR){
      return <Alert key="danger" variant='danger'>something went wrong</Alert>
    }
    const addToCart= (product)=>{
      dispatch(add(product))
    }
   const cards= productList.map(product=>(
    <div key={product.id} className="col-md-3" style={{marginBottom:"10px"}}>
        <Card className='h-100'>
        <div className='text-center'>
            <Card.Img variant="top" src={'http://localhost:8000/'+product.product_image} style={{width:'100px',height:'130px'}} />
        </div>
        <Card.Body>
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text>
              {product.product_price}
            </Card.Text>
            <Card.Text>
              {product.product_color}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={()=>addToCart({product})}>Add to Cart</Button>
        </Card.Footer>
        </Card>
        
    </div>
   ))

  return (
    <>
       <h1>Products</h1>
       <div className='row'>
          {cards}
       </div>
    </>
  )
}
export default Home;