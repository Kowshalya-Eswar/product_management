
import { useSelector,useDispatch } from 'react-redux'
import { Card,Button, Alert } from 'react-bootstrap';
import {remove} from '../store/cartSlice'

const Cart = () => {

  const dispatch = useDispatch();
  const productCart = useSelector(state=>state.cart)
  
  if(productCart.length===0){
    return <Alert key="danger" variant='danger'>No items in cart</Alert>
   }
  const removeCart = (id) =>{
     console.log("remove")
     dispatch(remove(id));
     alert("Cart Item Removed");
  }
  const cards= productCart.map((cartProduct)=>(
    <div key={cartProduct.product.id} className="col-md-12" style={{marginBottom:"10px"}}>
        <Card className='h-100'>
        <div className='text-center'>
            <Card.Img variant="top" src={'http://localhost:8000/'+cartProduct.product.product_image} style={{width:'100px',height:'130px'}} />
        </div>
        <Card.Body>
            <Card.Title>{cartProduct.product.product_name}</Card.Title>
            <Card.Text>
              {cartProduct.product.product_price}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" onClick={()=>removeCart(cartProduct.product.id)}>Remove Product</Button>
        </Card.Footer>
        </Card>
        
    </div>
   ))
  return (
    <div>
        <div className='row'>
           {cards}
        </div>
    </div>
  )
}

export default Cart
