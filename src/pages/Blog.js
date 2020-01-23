import React,{Component} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import SingleBlog from '../components/SingleBlog';
import Pagination from '../components/blog/Pagination';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import blogData from '../components/blog/BlogApi';
import  ScrollTop from '../components/ScrollTop';
import {Link } from "react-router-dom";

let dataItem = [
    {
        link: '/',
        label: 'Home',
    },
    {
        label: 'Blog',
    }
]

class Blog extends React.Component {
    _isMounted = false
    constructor(props){
        super(props)
    }

    componentDidMount = () => {
        this._isMounted = true
        if(this._isMounted){
          window.scrollTo(0, 0)
        }
      }
      componentWillUnmount() {
          this._isMounted = false;
      }
    render(){
        return(
            <div className='inner_page'>
                <Navigation/>
                <BreadCrumb breadcrumbitem={dataItem} breadcrumbtitle='Blog Listing'/>
                <section className="blog-one blog-one__blog-page">
                    <div className="container">
                        <div className="row">
                        {
                        blogData.all().map(val => (
                            <div className="col-lg-4" key={val.id}>
                            <div className="blog-one__single">
                            <div className="blog-one__single-inner-block">
                            <div className="blog-one__date">{val.blogDate}</div>
                            <a href="blog-details.html" className="blog-one__author">{val.blogAuthor}</a>
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
                        <Pagination/>
                    </div>
                </section>
                <Subscription />
                <Footer/>
                <ScrollTop scrollDuration={1000}/>
            </div>
        )
    }
}


export default Blog;