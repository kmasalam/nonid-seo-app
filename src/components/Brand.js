import React,{Component} from 'react';
import Slider from "react-slick";
let BrandData = [
    {
        imges: './assets/images/brand-1-1.png',
        alt: 'Awesome Image'
    },
    {
        imges: './assets/images/brand-1-1.png',
        alt: 'Awesome Image'
    },
    {
        imges: './assets/images/brand-1-1.png',
        alt: 'Awesome Image'
    },
    {
        imges: './assets/images/brand-1-1.png',
        alt: 'Awesome Image'
    },
    {
        imges: './assets/images/brand-1-1.png',
        alt: 'Awesome Image'
    },
    {
        imges: './assets/images/brand-1-1.png',
        alt: 'Awesome Image'
    },
]
const Brand = (props) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll:1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        <section className="brand-style-one">
            <img src={`${process.env.PUBLIC_URL}  ./assets/images/banner-icon-1-5.png`} alt="Awesome Image" className="bubble-1" />
            <img src={`${process.env.PUBLIC_URL}  ./assets/images/banner-icon-1-3.png`} alt="Awesome Image" className="bubble-2" />
            <div className="container">
            <Slider className='brand-carousel-one' {...settings}>
                {
                    BrandData.map((val,i)=>{
                        return(
                            <div className="item" key={i}>
                                <img src={process.env.PUBLIC_URL + val.imges} alt={val.alt} />
                            </div>
                        )
                    })
                }
                
            </Slider>
                <hr className="style-one" />
            </div>
        </section>
    )
}

export default Brand;