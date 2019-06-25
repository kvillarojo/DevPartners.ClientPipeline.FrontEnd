import React, { Component } from "react";
import './404.scss';

class PageNotFound extends Component {
    render() {
        return(
            <div className="notFoundPage">
                <div className="container errorPage">
                    <h1 className="contentPanel"> 404 </h1>
                    <h4> page not found!! </h4>
                </div>
            </div>
        );
    }
}

export default PageNotFound;