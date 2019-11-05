import React, { Component } from 'react';
import './../App.css';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
            <div className="container text-center">
                <ul className="footer-links">
                    <li>
                        <a href="www.facebook.com">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="www.twitter.com">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="www.google.com">
                            Google+
                        </a>
                    </li>
                    <li>
                        <a href="www.linkedin.com">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="www.behance.com">
                            Behance
                        </a>
                    </li>
                    <li>
                        <a href="www.behance.com">
                            Dribble
                        </a>
                    </li>
                    <li>
                        <a href="www.behance.com">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
          )
    }
}

export default Footer;
