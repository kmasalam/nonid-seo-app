import React, {Component} from 'react';
import SingleBlog from './SingleBlog'
import SectionTitle from './SectionTitle';
import blogData from '../components/blog/BlogApi';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";


const Blog = (props) => {
   
    return(
        <section className="blog-one" id="blog">
            <div className="container">
            <SectionTitle TitleAlignment='text-center' TitleData='Check out our latest
news & articles' BreakingNumber={23} />
                
                <div className="row">
                {
                        blogData.all().map(val => (
                            <div className="col-lg-4 col-md-6" key={val.id}>
                            <div className="blog-one__single">
                            <div className="blog-one__single-inner-block">
                            <div className="blog-one__date">{val.blogDate}</div>
                            
                            <Link to={`/blog/${val.id}`}    className="blog-one__author">
                                    <i className={val.blogAuthor} />
                                </Link>
                            <h3 className="blog-one__title">
                                <Link to={`/blog/${val.id}`}>
                                    {val.blogTitle}
                                </Link>
                            </h3>
                            <p className="blog-one__text">{val.blogContent}</p>
                                <Link to={`/blog/${val.id}`}   className="blog-one__link">
                                    <i className={val.blogIcon} />
                                </Link>
                            </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}  

export default Blog