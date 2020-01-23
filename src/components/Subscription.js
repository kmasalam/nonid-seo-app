import React,{ Component } from "react";
import SectionTitle from './SectionTitle';


let SubscribeImages = [
    {   
        image: '/assets/images/banner-icon-1-1.png',
        alt: 'Awesome Image',
        className: 'bubble-1',
    },
    {   
        image: '/assets/images/banner-icon-1-3.png',
        alt: 'Awesome Image',
        className: 'bubble-2',
    },
    {   
        image: '/assets/images/banner-icon-1-2.png',
        alt: 'Awesome Image',
        className: 'bubble-3',
    },
    {   
        image: '/assets/images/banner-icon-1-4.png',
        alt: 'Awesome Image',
        className: 'bubble-4',
    },
] 

const Subscription = (props) => {
    return(
        <div className="site-footer">

                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-icon-1-1.png`} alt={'Awesome Image'} className={'bubble-1'} />
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-icon-1-3.png`} alt={'Awesome Image'} className={'bubble-2'} />
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-icon-1-2.png`} alt={'Awesome Image'} className={'bubble-3'} />
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-icon-1-4.png`} alt={'Awesome Image'} className={'bubble-4'} />

                <div className="site-footer__subscribe">
                    <div className="container">
                    <SectionTitle TitleAlignment='text-center' TitleData='Subscribe our newsletter
to get new updates' BreakingNumber={24} />
                    
                    <form action="#" className="site-footer__subscribe-form">
                        <input type="text" name="email" placeholder="Enter your email" />
                        <button type="submit">Get Started</button>
                    </form>
                    </div>
                </div>
        </div>
            
    )
}

export default Subscription
