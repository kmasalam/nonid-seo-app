import React from 'react';
import blogData from '../components/blog/BlogApi';
import BlogAuthor from './components/BlogAuthor';
import CommentForm from './components/CommentForm';
import Sidebar from './components/Sidebar';
import SubScription from '../components/Subscription';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import  ScrollTop from '../components/ScrollTop';
import BreadCrumb from '../components/BreadCrumb';


let dataItem = [
    {
        link: '/',
        label: 'Home',
    },
    {
        label: 'Single Blog',
    }
]

let blogImageData = {
    images: '../assets/images/blog-single-1-1.jpg',
    alt: 'Single Blog Image'
};
let logoData = {
  src: '~/assets/images/logo-1-1.png',
  alt: 'Awesome Image',
  to: '/'
}


let CommentComponent = (props) => {
    const {image,author,date,time,commentText} = props
    return(
        <div className="comment-one__single">
            <div className="comment-one__image">
            <div className="inner-block">
                <img src="../assets/images/comment-1-2.jpg" alt="Awesome Image" />
            </div>
            </div>
            <div className="comment-one__content">
            <div className="comment-one__content-top">
                <div className="comment-one__top-left">
                <h3 className="comment-one__author">Vicente Elmore</h3>
                <p className="comment-one__date">20 April, 2019 <span className="comment-one__date-sep">.</span> 4:00 pm</p>
                <p className="comment-one__text">Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.</p>
                </div>
                <div className="comment-one__top-right">
                <a href="#" className="comment-one__reply">Reply</a>
                </div>
            </div>                           
            </div>
        </div>
    )
}



class BlogDetails extends React.Component {
    _isMounted = false;
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
       const Blog = blogData.get(
        parseInt(this.props.match.params.number, 10)
        
      )
      if (!Blog) {
        return <div>Sorry, No Blog Found</div>
      }
      
      return (

          <div className='inner_page'>
            <BreadCrumb breadcrumbitem={dataItem} breadcrumbtitle={Blog.blogTitle}/>
            <Navigation />
            <section className="blog-details">
                <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="blog-details__content">
                    <div className="blog-details__image">
                        <img src={process.env.PUBLIC_URL + blogImageData.images} alt={blogImageData.alt} />
                        <div className="blog-details__date">{Blog.blogDate}</div>
                    </div>{/* /.blog-details__image */}
                    <div className="blog-details__meta">
                        <a href="#" className="blog-details__meta-link">{Blog.blogAuthor}</a>
                        <span className="blog-details__meta-sep">.</span>
                        <a href="#" className="blog-details__meta-link">2 Comments</a>
                    </div>{/* /.blog-details__meta */}
                    <h3 className="blog-details__title">{Blog.blogTitle}</h3>
                    <p className="blog-details__text">{Blog.blogContent}</p>
                    <p className="blog-details__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
                    </div>
                    <BlogAuthor/>
                    <h2 className="blog-details__content-title">2 Comments</h2>
                    <div className="comment-one">
                    
                    <CommentComponent
                        image='../assets/images/comment-1-1.jpg'
                        author='Laquanda Bachmeier'
                        date='20 April, 2019'
                        time='4:00 pm'
                        text={`Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.`}
                    />
                    <CommentComponent
                        image='../assets/images/comment-1-1.jpg'
                        author='Laquanda Bachmeier'
                        date='20 April, 2019'
                        time='4:00 pm'
                        text={`Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.`}
                    />
                    {/*  */}
                    </div>
                    <h2 className="blog-details__content-title">Leave a Comment</h2>
                    <CommentForm/>
                </div>{/* /.col-lg-8 */}
                <div className="col-lg-4">
                    <Sidebar/>
                </div>
                </div>{/* /.row */}
            </div>
            </section>
                {/*  */}
            <SubScription/>
            {/*  */}
            <Footer/>
            <ScrollTop scrollDuration={1000}/>
            </div>
      )
    }
  }
export default BlogDetails