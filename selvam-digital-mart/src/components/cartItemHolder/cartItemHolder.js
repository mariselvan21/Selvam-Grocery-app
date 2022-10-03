import './cartItemHolder.css';
import CartItem from '../cartItem/cartItem';
import { useContext } from 'react';
import Appcontext from '../context/context';

function CartItemHolder() {
    var cartItem = useContext(Appcontext).cartItem;
    // console.log(cartItem);
    return (
        <div className='cartItemHolder'>
            <div className='container'>
                <div className='cartItemHolderBox'>
                    <div className='cartItemHolderWrapper'>
                        {
                            cartItem.map((item) => {
                                return (<CartItem key={Math.random()} name={item.name} image={item.image} offer={item.offer} price={item.price} finalPrice={parseInt(item.price-((item.offer/100)*item.price))}id={item.id} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItemHolder;
