import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import SectionTitle from './SectionTitle';

let bannerImage = [
    {
        src: './assets/images/banner-icon-1-1.png',
        alt: 'Awesome Image',
        className: 'bubble-1'
    },
    {
        src: './assets/images/banner-icon-1-3.png',
        alt: 'Awesome Image',
        className: 'bubble-2'
    },
    {
        src: './assets/images/banner-icon-1-2.png',
        alt: 'Awesome Image',
        className: 'bubble-3'
    },
    {
        src: './assets/images/banner-icon-1-4.png',
        alt: 'Awesome Image',
        className: 'bubble-4'
    },
    {
        src: './assets/images/banner-icon-1-5.png',
        alt: 'Awesome Image',
        className: 'bubble-5'
    },
    {
        src: './assets/images/banner-icon-1-6.png',
        alt: 'Awesome Image',
        className: 'bubble-6'
    },
    {
        src: './assets/images/banner-moc-1.png',
        alt: 'Awesome Image',
        className: 'banner-one__moc'
    },
]
let bannerContent = {
    bannerText: `Excepteur sint occaecat cupidatat non proident sunt in  culpa qui officia deserunt mollit lorem ipsum anim id est  laborum perspiciatis unde.`,
    btnLink: '/',
    btnText: 'Get Started'
}
const Banner = (props) => {
    return(
        <section className="banner-one" id="home">
           {
               bannerImage.map((val,i)=>{
                   return(
                       <div key={i}>
                           <img src={process.env.PUBLIC_URL + val.src} alt={val.alt} className={val.className} />
                       </div>
                   )
               })
           }
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-md-8">
                    <div className="banner-one__content">
                    <SectionTitle TitleAlignment='' TitleData='Boost your web traffic & rank with nonid' BreakingNumber={0} />
                    <p className="banner-one__text">
                        {bannerContent.bannerText}
                    </p>
                    <Link to={bannerContent.btnText} className={'banner-one__btn'}>{bannerContent.btnText}</Link>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}

export default Banner;