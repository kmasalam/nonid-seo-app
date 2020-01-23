import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SectionTitle from './SectionTitle';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";


let testimonialPager = [
    {
        pagerlink: '#!',
        src: './assets/images/testi-1-1.png',
        alt: 'Awesome Image',
    },
    {
        pagerlink: '#!',
        src: './assets/images/testi-1-2.png',
        alt: 'Awesome Image',
    },
    {
        pagerlink: '#!',
        src: './assets/images/testi-1-3.png',
        alt: 'Awesome Image',
    }
]

let quoteItem = [
    {
        quotetext: `This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        quteauthor: `Delila Rayam`,
    },
    {
        quotetext: `This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        quteauthor: `Delila Rayam`,
    },
    {
        quotetext: `This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        quteauthor: `Delila Rayam`,
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block",zIndex: '99' }}
        onClick={onClick}
      >
          <i className={'nonid-icon-left-arrow icon-revresed'}></i>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block",zIndex: '99' }}
        onClick={onClick}
      >
          <i className={'nonid-icon-left-arrow'}></i>
      </button>
    );
  }

  

class Testimonial extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }

      componentDidMount() {
            this.setState({
            nav1: this.slider1,
            nav2: this.slider2
            });
        }
    render(){
        var navOneSettings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        var navTwoSettings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow className='slick-next' />,
            prevArrow: <SamplePrevArrow className='slick-prev' />
        };
        return(
                    <section className="testimonials-style-one">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 d-flex">
        <div className="my-auto">
          <div id="testimonials-slider-pager">
            <div className="testi-icon">
              <img src="./assets/images/testi-qoute-1-1.png" alt="Awesome Image" />
            </div>{/* /.testi-icon */}
            <Slider className="testimonials-slider-pager-one"
                    asNavFor={this.state.nav2}
                    {...navOneSettings}
                    ref={slider => (this.slider1 = slider)}
                  >
                      {
                          testimonialPager.map((val,i)=>{
                              return(
                                <div key={i}>
                                    <Link to={val.pagerlink} className="pager-item" >
                                        <img src={val.src} alt={val.alt} />
                                    </Link>
                                </div>
                              )
                          })
                      }
                   
                  </Slider>
                <div >
            </div>{/* /.testimonials-slider-pager-one */}
          </div>{/* /#testimonials-slider-pager */}
        </div>{/* /.my-auto */}
      </div>{/* /.col-lg-6 */}
      <div className="col-lg-6">
      <SectionTitle TitleAlignment='' TitleData='What our clients are
saying' BreakingNumber={21} />

        <Slider  className="slider testimonials-slider"
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={1}
                    {...navTwoSettings}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                      {
                          quoteItem.map((val,i)=>{
                              return(
                                <div className="slide-item" key={i}>
                                    <div className="single-testi-one">
                                        <p>{val.quotetext}</p>
                                        <h3>{val.quteauthor}</h3>
                                    </div>
                                </div>
                              )
                          })
                      }
                  </Slider>
      </div>{/* /.col-lg-6 */}
    </div>{/* /.row */}
  </div>{/* /.container */}
</section>
        )
    }
}


export default Testimonial;