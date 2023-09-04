
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import RootLayout from './component/RootLayout';
import Home from './component/Home'
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct'
import ProductList from './component/ProductList';
import Cart from './component/Cart';
function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<RootLayout/>}>
          
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/productList/update/:id" element={<UpdateProduct />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/productList" element={<ProductList />}></Route>
          <Route path ="/cart" element={<Cart />}></Route>
         
      </Route>
      </Routes>

    </div>
  );
}

export default App;
