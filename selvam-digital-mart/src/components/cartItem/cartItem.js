import './cartItem.css';
import { useState } from 'react'

function CartItem(props) {
    const [addToCardButton, setAddToCartButton] = useState(true);
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
                            <h3 className='cartItemPrice'>{props.price}<s>RS.200</s></h3>
                        </div>


                    </div>

                    {addToCardButton ?         <div className='addToCartButtonHolder' onClick={() => {
                        setAddToCartButton(false);
                    }}>
                        <button className='cartAddToCartButton'
                        >Add to Cart <button className='increaseButton'>+</button></button>
                    </div>:
                    <div className='buttonHolder'>
                        <button className='decreaseButton'>-</button>
                        <p className='cartItemNumber'>1</p>
                        <button className='increaseButton'>+</button>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default CartItem;