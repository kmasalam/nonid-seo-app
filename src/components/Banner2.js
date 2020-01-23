import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import SectionTitle from './SectionTitle';

let bannerImage = [
    {
        src: './assets/images/banner-moc-2.png',
        alt: 'Awesome Image'
    }
]
let bannerContent = {
    bannerText: `Excepteur sint occaecat cupidatat non proident sunt in  culpa qui officia deserunt mollit lorem ipsum anim id est  laborum perspiciatis unde.`,
    btnLink: '/',
    btnText: 'Get Started'
}
const Banner = (props) => {
    return(
        <section className="banner-one banner-one__home-two" id="home">
            {
                bannerImage.map((val,i)=> {
                    return(
                        <img src={val.src} className="banner-one__moc" alt={bannerImage.alt} key={i} />
                    )
                })
            }
            
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="banner-one__content">
                    <SectionTitle TitleAlignment='' TitleData='Boost your web traffic & rank with nonid' BreakingNumber={0} />
                        <p className="banner-one__text">{bannerContent.bannerText}</p>
                        <Link className="banner-one__btn" to={bannerContent.btnLink}>{bannerContent.btnText}</Link>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}

export default Banner;