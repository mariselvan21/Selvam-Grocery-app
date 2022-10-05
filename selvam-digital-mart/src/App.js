import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import ProductHolder from './components/productHolder/productHolder';
import Description from './components/description/description';
import {Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import  Appcontext  from './components/context/context';
import CartItemHolder from './components/cartItemHolder/cartItemHolder';
import HeaderPageHolder from './components/headerPage/headerPageHolder';
import Login from './components/login/login';
import Footer from './components/footer/footer';




function App() {
const[cartItem,setCartItem]=useState([]);
const[isLoggedin,setIsLoggedin]=useState(false);

function addToCart(product){
    setCartItem([...cartItem,product])
  }

function loginHandler(value){
  setIsLoggedin(value);
}

function removeCartItem(name){
  // alert('hi');
  var newCart=[];
  var index=0;
  for(var i=0;i<cartItem.length;i++){
    if(cartItem[i].name!=name){
      newCart[index]=cartItem[i];
      index++;
    }
  }
  setCartItem(newCart);
}
  return (
    <div className="App">
      <Appcontext.Provider value={{cartItem,addToCart,removeCartItem,isLoggedin,loginHandler,setIsLoggedin}}>
       < Header/>
       
      <Routes>
        <Route index element={<HeaderPageHolder />}></Route>
        <Route path='items/:category' element={<ProductHolder /> } />
        <Route path='description/:category/:id'element={<Description />} />
        <Route path='cart' element={isLoggedin?<CartItemHolder></CartItemHolder>:<Login />} />
        <Route path='login' element={<Login />}/>
      </Routes>
      <Footer />
      
      
      </Appcontext.Provider>
       
    </div>
  )
  }

export default App;
