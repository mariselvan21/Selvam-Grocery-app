import './productHolder.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Product from '../product/product';
import { useContext } from 'react';
import Appcontext from '../context/context';
function ProductHolder() {
    var addToCart = useContext(Appcontext).addToCart;
    const params = useParams();
    //  console.log(params);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://633293e2573c03ab0b4b5764.mockapi.io/' + params.category).then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json()
            }
            return false;

        }).then((product) => {
            product.forEach((item) => {
                item.category = params.category;
                item.finalPrice=parseInt(item.price-((item.offer/100)*item.price));
})
            setItems(product);
        })
    }, [params]);
    // console.log(items);
    function ascendingOrder(){
       var x=items.sort((a,b)=>{
            return a.finalPrice-b.finalPrice;
        })
        setItems([...x]);

    }
    function descendingOrder(){
        var y=items.sort((a,b)=>{
             return b.finalPrice-a.finalPrice;
         })
         setItems([...y]);
 
     }
    return (
        <div className='productHolder'>
            <div className='container'>
                <div className='productOrderButton'>
                    <button className='ascendingButton' onClick={ascendingOrder}>Ascending Order</button>
                    <button className='descendingButton'onClick={descendingOrder}>Descending Order</button>
                </div>
                <div className='productHolderWrapper'>
                    {
                        items.map((product) => {
                            return (<Product key={Math.random()} add={addToCart} name={product.name} detail={product.detail} offer={product.offer} image={product.image} price={product.price} id={product.id} category={product.category} item={product} addToCart={product.add} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ProductHolder;