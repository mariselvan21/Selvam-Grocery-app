import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import ProductHolder from './components/productHolder/productHolder';
import Description from './components/product/description/description';
import CartItem from './components/cartItem/cartItem';
import {Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import  Appcontext  from './components/context/context';
import CartItemHolder from './components/cartItemHolder/cartItemHolder';



function App() {
const[cartItem,setCartItem]=useState([]);

function addToCart(product){
    setCartItem([...cartItem,product])
  }

  return (
    <div className="App">
      <Appcontext.Provider value={{cartItem,addToCart}}>
       < Header/>
      < Homepage />
      <Routes>
        <Route path='items/:category' element={<ProductHolder /> } />
        <Route path='description/:category/:id'element={<Description />} />
        <Route path='cart' element={<CartItemHolder></CartItemHolder>} />
      </Routes>
      
      
      </Appcontext.Provider>
       
    </div>
  )
  }

export default App;
