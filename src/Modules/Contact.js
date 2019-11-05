import React, { Component } from 'react';
import './../App.css';


class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <div className="container text-center">
                    <div className="contact-heading">
                        <h2>GET IN TOUCH</h2>
                        <p className="">1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202)
                            456-1111
                        </p>
                    </div>
                    <div className="contact-form">
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10 ">
                                <form action="get">
                                    <div className="row">
                                        <div className="col-sm-6 position-relative">
                                            <input type="text" name="name" className="postion-relative" required autoComplete="off"/>
                                            <label >Your Name <span>*</span></label>
                                        </div>
                                        <div className="col-sm-6 position-relative">
                                            <input type="email" name="email" className="postion-relative" required autoComplete="off"/>
                                            <label >Your Email <span>*</span></label>
                                        </div>
                                        <div className="col-sm-12  mt-27 mb-53 position-relative">
                                            <textarea name="" id="" cols="30" rows="9" className="postion-relative"
                                                required autoComplete="off"></textarea>
                                            <label>Your Message <span>*</span></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="theme-btn light-blue ">Send Message</button>
                                </form>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
}

export default Contact;
