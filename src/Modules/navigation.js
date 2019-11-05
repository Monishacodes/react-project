import React, { Component } from 'react';
import './../App.css';
import '../Assets/sass/vendor/bootstrap/bootstrap.min.css';
import '../Assets/js/script';


 class Navigation extends Component {
    render() {
        return(
            <nav className="navbar" id="navbarid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 navbar-header col-xs-3">
                            <a className="navbar-brand" href="/">
                                <img src='img/logo.png' alt="hello" />
                            </a>
                        </div>
                        <div className="col-sm-9 text-right col-xs-9 pr-0 pos-inherit">
                            <ul className="navbar-menu">
                                <li>
                                    <a href="/" className="text-white">HOME</a>
                                </li>
                                <li>
                                    <a href="/" className="text-white">ABOUT</a>
                                </li>
                                <li className="drop">
                                    <a href="/" className="text-white ">WORK</a>
                                    <div className="dropdown-content">
                                       <div className="drop-wrapper">
                                       <div className="header">
                                            <h2>Mega Menu</h2>
                                        </div>   
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <h3>Category 1</h3>
                                                <a href="/">Link 1</a>
                                                <a href="/">Link 2</a>
                                                <a href="/">Link 3</a>
                                            </div>
                                            <div className="col-sm-4">
                                                <h3>Category 1</h3>
                                                <a href="/">Link 1</a>
                                                <a href="/">Link 2</a>
                                                <a href="/">Link 3</a>
                                            </div><div className="col-sm-4">
                                                <h3>Category 1</h3>
                                                <a href="/">Link 1</a>
                                                <a href="/">Link 2</a>
                                                <a href="/">Link 3</a>
                                            </div>
                                        </div>
                                       </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/" className="text-white">BLOG</a>
                                </li>
                                <li>
                                    <a href="/" className="text-white">CONTACT</a>
                                </li>
                                <li>
                                    <a href="javascript:void()" className="icon">
                                        <span className="icon-bar upper"></span>
                                        <span className="icon-bar middle"></span>
                                        <span className="icon-bar bottom"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </nav>
          )
    }
}

export default Navigation;
