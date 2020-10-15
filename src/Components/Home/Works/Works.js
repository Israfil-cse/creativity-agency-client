import React from 'react';
import './Works.css';
import carousel from '../../../images/carousel-1.png';
import carouse2 from '../../../images/carousel-2.png';
import carouse3 from '../../../images/carousel-3.png';
import carouse4 from '../../../images/carousel-4.png';
import carouse5 from '../../../images/carousel-5.png';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Works = () => {
    return (
        <div id="work" className="carousel_parent">
            <div className="container">

                <div>
                    <h3 className="text-center text-white py-5">Here are some of <span style={{color: '#7AB259'}}>out works</span></h3>
                </div>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={5}
                >
                    <Slider  className="carouselImg">
                        <Slide index={0}><img src={carousel} alt="" /></Slide>
                        <Slide index={1}><img src={carouse2} alt="" /></Slide>
                        <Slide index={2}><img src={carouse3} alt="" /></Slide>
                        <Slide index={3}><img src={carouse4} alt="" /></Slide>
                        <Slide index={4}><img src={carouse5} alt="" /></Slide>
                    </Slider>
                    <div className="d-flex justify-content-center  mt-5 pb-5">
                        <div className="carouselBtn">
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                        </div>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
};

export default Works;