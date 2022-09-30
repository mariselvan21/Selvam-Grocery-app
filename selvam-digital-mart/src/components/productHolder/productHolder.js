import './productHolder.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Product from '../product/product';
import {useContext} from 'react';
import Appcontext from '../context/context';
function ProductHolder() {
    var addToCart = useContext(Appcontext).addToCart;
    const params = useParams();
    // console.log(params);
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
                
            })
            setItems(product);
        })
    }, [params]);

    return (
        <div className='productHolder'>
            <div className='container'>
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