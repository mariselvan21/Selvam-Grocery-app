import './homepage.css';
import { useNavigate } from 'react-router-dom';

import image1 from '../images/HomePageImages/groceryitems.png';
import image2 from '../images/HomePageImages/vegetables.webp';
import image3 from '../images/HomePageImages/fruitsImage.jpg';
import image4 from '../images/HomePageImages/grocerysnacks.png';




function Homepage() {
    var navigateTo=useNavigate();
    // console.log(image1);
   
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='homePageWrapper'>
                    <div className='homePageImageContainer' onClick={(()=>{
                            navigateTo('/items/groceryItems')
                    })}>
                        <img src={image1} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Grocery Items</h1>
                    </div >
                    <div className='homePageImageContainer' onClick={(()=>{
                            navigateTo('/items/vegetables')
                    })}>
                        <img src={image2} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Vegetables</h1>
                    </div>
                    <div className='homePageImageContainer' onClick={(()=>{
                            navigateTo('/items/fruits')
                    })}>
                        <img src={image3} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Fruits</h1>
                    </div>
                    <div className='homePageImageContainer' onClick={(()=>{
                            navigateTo('/items/snacks')
                    })}>
                        <img src={image4} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Snacks</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Homepage;
