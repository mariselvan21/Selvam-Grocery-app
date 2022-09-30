import './product.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import  Appcontext  from '../context/context';


function Product(props) {
    const [addToCardButton, setAddToCartButton] = useState(true);
    let finalPrice = parseInt(props.price - ((props.offer / 100) * props.price));
    var navigateTo = useNavigate();
   
    // console.log(props.addToCart);
    // console.log(props.item);

    return (
        <div className='productContainer'>
            <div className='product' >
                <div onClick={() => {
                navigateTo('/description/' + props.category + '/' + props.id)
            }}>
                <div className='productImage'>
                    <img src={props.image}></img>
                </div>
                <div className='productDetails'>
                    <p className='productName'>{props.name}</p>
                    <p className='productDetail'>{props.detail}</p>
                    <p className='productOffer'>{props.offer}%offer</p>
                    <p className='productPrice'>M.R.P <s>{(props.price)}</s> <b>{finalPrice}</b></p>
                </div>
                </div>
            
            {addToCardButton ? <div className='addButtonHolder' onClick={() => {
              
               props.add(props.item);
                setAddToCartButton(false);

            }}
            >
                <button className='cartAddToCartButton'
                >Add to Cart <button className='increaseButton'>+</button></button>
            </div> :
                <div className='productButtonHolder'>
                    <button className='decreaseButton'>-</button>
                    <p className='cartItemNumber'>1</p>
                    <button className='increaseButton'>+</button>
                </div>}
                </div>

        </div>
    )
}
export default Product;