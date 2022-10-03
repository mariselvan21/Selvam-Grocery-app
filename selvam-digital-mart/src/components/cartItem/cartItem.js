import './cartItem.css';
import { useState } from 'react';
import {useContext} from 'react';
import Appcontext from '../context/context';

function CartItem(props) {
    const [addToCardButton, setAddToCartButton] = useState(true);
    const[quantity,setQuantity]=useState(1);
    var removeCartItem=useContext(Appcontext).removeCartItem;
    // console.log(removeCartItem);
    return (
        <div className='cartItem'>
            <div className='container'>
                <div className='cartItemBox'>
                    <div className='cartItemWrapper'>
                        <div className='cartImageBox'>
                            <img src={props.image}></img>
                        </div>
                        <div className='cartItemDetails'>
                            <p className='cartItemName'>{props.name}</p>
                            <p className='cartItemDetail'>{props.detail}</p>
                            <h3 className='cartItemPrice'>{quantity*(props.finalPrice)}<s>{quantity*(props.price)}</s></h3>
                        </div>


                    </div>

                    {addToCardButton ?         <div className='addToCartButtonHolder' onClick={() => {
                        setAddToCartButton(false);
                    }}>
                        <button className='cartAddToCartButton'
                        >Add to Cart <button className='increaseButton' >+</button></button>
                    </div>:
                    <div className='buttonHolder'>
                        <button className='decreaseButton' onClick={()=>{
                            if(quantity>1){
                                setQuantity(quantity-1)
                            }
                            else {
                                removeCartItem(props.name)
                            }
                        }}>-</button>
                        <p className='cartItemNumber'>{quantity}</p>
                        <button className='increaseButton' onClick={()=>{
                            setQuantity(quantity+1)
                        }}>+</button>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default CartItem;