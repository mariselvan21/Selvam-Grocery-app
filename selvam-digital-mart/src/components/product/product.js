import './product.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Product(props) {
   
        let finalPrice=parseInt(props.price-((props.offer/100)*props.price));
        var navigateTo=useNavigate();
        
    return (
        <div className='container'>
            <div className='product' onClick={()=>{
                navigateTo('/description/'+props.category+'/'+props.id)
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
                <div className='button'>
                    
                    <button className='addToCartButton'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product;