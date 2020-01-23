import React from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";

class SingleBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
       const {blogDate,blogAuthor,blogTitle,blogContent,blogIcon,link}  = this.props
        return(
            <div className="col-lg-4" >
                <div className="blog-one__single">
                <div className="blog-one__single-inner-block">
                <div className="blog-one__date">{blogDate}</div>
                <a href="blog-details.html" className="blog-one__author">{blogAuthor}</a>
                <h3 className="blog-one__title"><a href="blog-details.html">{blogTitle}</a></h3>
                <p className="blog-one__text">{blogContent}</p>
                    <Link to={`/blog/${blogTitle}`}   className="blog-one__link">
                        <i className={blogIcon} />
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}

export default SingleBlog