import './homepage.css';

import image1 from '../images/groceryitems.png';
import image2 from '../images/vegetables.webp';
import image3 from '../images/fruitsImage.jpg';
import image4 from '../images/grocerysnacks.png';

function Homepage() {
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='homePageWrapper'>
                    <div className='homePageImageContainer'>
                        <img src={image1} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Grocery Items</h1>
                    </div >
                    <div className='homePageImageContainer'>
                        <img src={image2} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Vegetables</h1>
                    </div>
                    <div className='homePageImageContainer'>
                        <img src={image3} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Fruits</h1>
                    </div>
                    <div className='homePageImageContainer'>
                        <img src={image4} className='homePageImage' />
                        <h1 className='homePageImageHeading'>Snacks</h1>
                    </div>
                </div>
                {/* <div className='image1Container'>
                        
                    </div>
                    <div className='image2Container'>
                        
                    </div>
                    <div className='image3Container'>
                        
                    </div>
                    <div className='image4Container'>
                        
                    </div> */}

            </div>
        </div>
    )
}

export default Homepage;
