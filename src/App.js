import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import $ from 'jquery';
// import  './Assets/js/script';
import './App.css';


import Navigation from './Modules/navigation';
import Slickslider from './Modules/Slider';
import Contact from './Modules/Contact';
import Search from './Modules/Search';
import Footer from './Modules/Footer';
      

export default class App extends Component {
    render (){
      return (
        <div>
          <header>
            <Navigation />  
            <Slickslider />    
          </header>
          
          <Search /> 
         
          <Contact /> 
          <Footer />
        </div>
        );
      }
    }