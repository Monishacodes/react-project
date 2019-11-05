import React, { Component } from 'react';
import './../App.css';
import $ from 'jquery';
import Slider from 'react-slick';


export default class Slickslider extends Component {
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,

        };
        console.log($);
        return(
            <div className="Hero-slider-section">
                <div className="container">
                    <div className="slider">
                        <Slider> 
                        <div className="slider-content">
                            <h2 className="text-center  text-sans">
                                Hi there! We are the new kids on the block 
                                and we build awesome websites and mobile apps.
                            </h2>
                            <div className="text-center mb-145">
                                <a href="/" className="theme-btn orange ">
                                    Work with us!
                                </a>
                            </div>
                        </div>
                        <div className="col-md-10 slider-content">
                            <h2 className="text-center text-sans">
                                Hi there! We are the new kids on the block 
                                and we build awesome websites and mobile apps.
                            </h2>
                            <div className="text-center mb-145">
                                <a href="/" className="theme-btn orange ">
                                    Work with us!
                                </a>
                            </div>
                        </div>

                        </Slider>
                        
                        
                    </div>
                </div>
            </div>
          )
    }
}

