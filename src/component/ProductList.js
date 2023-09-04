import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import { Alert } from 'react-bootstrap';
import StatusCode from '../utils/StatusCode';
import { Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { CgPlayListAdd } from 'react-icons/cg'
import { Link } from 'react-router-dom';
const ProductList = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const { data: products, status } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setProductList(products);
  }, [products])

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return <Alert key="danger" variant='danger'>something went wrong</Alert>
  }


  const deleteProduct = async (id) => {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    alert(result);
    dispatch(getProducts());
  }

  return (
    <div>
      <div className="d-flex text-left">
        Add Product
        <Link to={"/add"}>
          <span className="addProduct"><CgPlayListAdd /></span>
        </Link>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Color</th>
            <th>Image</th>
            <th> Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            productList && productList.map((product) =>
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.product_name}</td>
                <td>{product.product_description}</td>
                <td>{product.product_price}</td>
                <td>{product.product_color}</td>
                <td><img style={{ width: 50, height: 50 }} alt="" src={'http://localhost:8000/' + product.product_image}></img></td>
                <td>
                  <Link to={"update/" + product.id}>
                    <span className="update"><FaEdit /></span>
                  </Link>
                </td>
                <td> <FaTrashAlt onClick={() => deleteProduct(product.id)} /> </td>
              </tr>

            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ProductList
