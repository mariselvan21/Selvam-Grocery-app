import './topDealsHolder.css';
import { useEffect, useState } from 'react';
import Product from '../product/product';

function TopTealsHolder() {
    const [topDeals, setDopTeals] = useState([]);
    // const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        fetch('https://633293e2573c03ab0b4b5764.mockapi.io/groceryItems').then((response) => {
            //  console.log(response);
            if (response.ok) {
                return response.json();
            }
            return false;
        }).then((product) => {
            var sorted = product.sort((a, b) => {
                return (b.offer - a.offer)
            })

            //  console.log(sorted);
            setDopTeals((previous) => {

                return [...previous, sorted[0]]
            })
        }).then(() => {

            fetch('https://633293e2573c03ab0b4b5764.mockapi.io/vegetables').then((response) => {
                //  console.log(response);
                if (response.ok) {
                    return response.json();
                }
                return false;
            }).then((product) => {
                var sorted = product.sort((a, b) => {
                    return (b.offer - a.offer)
                })

                //  console.log(sorted);
                setDopTeals((previous) => {

                    return [...previous, sorted[0]]
                })
            })
        }).then(() => {

            fetch('https://633293e2573c03ab0b4b5764.mockapi.io/fruits').then((response) => {
                // console.log(response);
                if (response.ok) {
                    return response.json();
                }
                return false;
            }).then((product) => {
                var sorted = product.sort((a, b) => {
                    return (b.offer - a.offer)
                })

                //  console.log(sorted);
                setDopTeals((previous) => {

                    return [...previous, sorted[0]]
                })
            })
        }).then(() => {

            fetch('https://633293e2573c03ab0b4b5764.mockapi.io/snacks').then((response) => {
                // console.log(response);
                if (response.ok) {
                    return response.json();
                }
                return false;
            }).then((product) => {
                var sorted = product.sort((a, b) => {
                    return (b.offer - a.offer)
                })

                //  console.log(sorted);
                setDopTeals((previous) => {

                    return [...previous, sorted[0]]
                })
            })
        })



    }, [])

    console.log(topDeals);
    return (
        <div className='topDealsHolder'>
            <div className='container'>
                <div className='topDealsHeading'>
                    <h1>TOP DEALS</h1>
                    <div className='topDealsWrapper'>

                        {
                            topDeals.map((item) => {
                                return <Product key={Math.random} name={item.name} detail={item.detail} offer={item.offer} image={item.image} price={item.price} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopTealsHolder;