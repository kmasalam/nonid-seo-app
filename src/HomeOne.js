import React from 'react';
import ServiceSection from './components/Service';
import PricingTable from './components/PricingTable';
import FunFacts from './components/FunFacts';
import Blog from './components/Blog';
import Subscription from './components/Subscription';
import {CtaOne,CtaTwo,CtaThree} from './components/CallToAction';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import ScrollTop from './components/ScrollTop';
import Brand from './components/Brand';

let logoData = {
    src: './assets/images/logo-1-1.png',
    alt: 'Awesome Image',
    to: '/'
}
class HomeOne extends React.Component{
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div>
                <Navigation/>
                <Banner/>
                <ServiceSection/>
                <CtaOne/>
                <CtaTwo/>
                <CtaThree/>
                <PricingTable/>
                <Testimonial/>
                <Brand/>
                <FunFacts/>
                <Blog/>
                <Subscription/>
                <Footer/>
                <ScrollTop scrollDuration={1000}/>
            </div>
        )
    }
}

export default HomeOne;