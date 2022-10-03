import './cartIcon.css';
import {useContext} from 'react';
import Appcontext from '../context/context';

function CartIcon(){
    var cartItem=useContext(Appcontext).cartItem;
    
    // console.log(cartItem);
    return(
        <div className='cartIconHolder'>
            <p className='cartIcon'>&#128722;</p>
            <p className='cartItemCount'>{cartItem.length}</p>
        </div>
    )
}
 
export default CartIcon;