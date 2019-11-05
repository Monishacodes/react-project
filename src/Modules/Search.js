import React, { Component } from 'react';
import './../App.css';

import Data from '../Data/Article_data.json';

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            Data,
            renderData : Data
        }
    }
    updateSearch = (event) => {
     
        var updatedList = this.state.Data;
        console.log(this.state.Data);
      //  var updatedList2 = this.state.Data;
       
        let searchValue = event.target.value.toLowerCase();	
        //  console.log(searchValue);
        updatedList = updatedList.filter(function (item) {
            return Object.keys(item).some(key => item[key].toString().toLowerCase().search(searchValue) !== -1)
        });                 
        this.setState({
             renderData: updatedList,           
        }); 
    }
    resetSearch = (event) => {
        event.preventDefault();
        console.log('The link was clicked.');
		let resetlist = this.state.Data;
		this.setState({
            renderData: resetlist,
        });
	}
	selectCategory = (event) => {
        event.preventDefault();
        console.log('The link was clicked.');
        var linkval = event.target.innerText;
        console.log(linkval);
        
        let selectiondata = this.state.Data;
        console.log(selectiondata);
		selectiondata = selectiondata.filter(function (item) {
             return item.category===linkval;
             
        });
        
		this.setState({
            renderData: selectiondata,
        });
       
	}
    render() {
        return(
            <div>
                <section className="s-block pt-107">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 pr-0">                    
                                <form action="get">
                                    <div className="s-block-f">
                                        <input type="text"  onChange={this.updateSearch.bind(this)} className="s-block-f-input text-sans w-100" name="search" id=""
                                            placeholder="Search..." />
                                    </div>
                                </form>            
                            </div>
                            <div className="col-sm-6 pl-30">                    
                                <ul className="article-tabs ">
                                    <li><a href="#"  onClick={this.resetSearch}>ALL</a></li>
                                    <li><a href="#"  onClick={this.selectCategory}>DRUPAL</a></li>
                                    <li><a href="#"  onClick={this.selectCategory}>JAVA</a></li>
                                    <li><a href="#"  onClick={this.selectCategory}>WORDPRESS</a></li>
                                </ul>                        
                            </div>
                        </div>
                    </div>
                </section>
                <section className="articles-section pt-43">
                    <div className="container">
                        <div className="row">
                            {this.state.renderData.map(item => (
                                <div className="col-sm-6" >
                                    <div className="article mb-60" >
                                        <div key={item.artColor} className={`article-img  text-center ${item.artColor }`}>
                                            <img key={item.id} src={item.imgUrl} alt="" />
                                        </div>
                                        <div className="article-content">
                                            <h3 key={item.contentHeading} className="text-sans  mt-0 mb-10">{item.contentHeading}</h3>
                                            <p key={item.contentSubheading} className="article-content-subtitle mb-10  mt-0 text-orange">{item.contentSubheading}</p>
                                            <p key={item.id} contentText="article-content-text mb-10  mt-0">{item.contentText}</p>
                                        </div>
                                    </div>
                                </div>   
                                )            
                            )}
                        </div>
                    </div>
                </section>                
            </div>       
            )
        }
    }

