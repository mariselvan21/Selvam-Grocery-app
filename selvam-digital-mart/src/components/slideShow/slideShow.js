import './slideShow.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from '../images/slideImages/oilImage.jpg';
import image2 from '../images/slideImages/fruits.jpg';
import image3 from '../images/slideImages/oilImage.jpg';
import image4 from '../images/slideImages/spicesImage.jpg';



function SlideShow(){

    const slideImages=[
        {
            image:image1
        },
        {
            image:image2
        },
        {
            image:image3
        },
        {
            image:image4
        }

    ]

    return(
        <div className='slideContainer'>
            <Slide>
                {
                    slideImages.map((Slide,index)=>(
                        <div className="eachSlide" key={index}>
                            <img src={Slide.image} width={1366}></img>
                        </div>
                    ))
                }
            </Slide>
        </div>

    )
}

export default SlideShow;