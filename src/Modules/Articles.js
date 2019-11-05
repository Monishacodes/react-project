import React, { Component } from 'react';
import './../App.css';
import '../Assets/sass/vendor/bootstrap/bootstrap.min.css';
import ArticlesCards from './Articles-card';


class Articles extends Component {
    render() {
        return(
            <div>
                <section className="articles-section pt-43">
                    <div className="container">
                        <div className="row">
                            <ArticlesCards />
                           

                           
                        </div>
                    </div>
                </section>       
            </div>
          )
    }
}


export default Articles;
