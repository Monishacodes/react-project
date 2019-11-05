import  { Component } from 'react';
import $ from 'jquery';
import './../../App.css';

class Jquery extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount = () => {   
    function burgermenu(){
      $('.navbar-menu li:last-child').click(function(){
        $('.icon').toggleClass('rotate');
        $('.navbar-menu').toggleClass('active-menu');
        $('body').toggleClass('overflow-hide');
      })
    };

     burgermenu();
  }
}



export default Jquery;
