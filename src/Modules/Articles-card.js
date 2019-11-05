import React, { Component } from 'react';
import './../App.css';
import '../Assets/sass/vendor/bootstrap/bootstrap.min.css';
import Data from '../Data/Article_data.json';


export default class ArticlesCards extends Component {
  constructor(){
      super();
      this.state = {
          Data: Data,
      }
  }
    render() {
       // console.log('hello article card')
        return (
            <div> 
                {this.state.Data.map(item => (
                      <div className="col-sm-6" >
                      <div className="article " >
                          <div  className={`article-img  text-center ${item.artColor }`}>
                              <img src={item.imgUrl} alt="" />
                          </div>
                          <div className="article-content">
                              <h3 className="text-sans  mt-0 mb-10">{item.contentHeading}</h3>
                              <p className="article-content-subtitle mb-10  mt-0 text-orange">{item.contentSubheading}</p>
                              <p className="article-content-text mb-10  mt-0">{item.contentText}</p>
                          </div>
                      </div>
                  </div>   
                    )              
                )}
            </div>       
            )
        }  
    }