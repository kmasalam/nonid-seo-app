import React from 'react';
import Navigation from '../components/Navigation';
import BreadCrumb from '../components/BreadCrumb';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle'
import ScrollTop from '../components/ScrollTop';
import {Link} from 'react-router-dom';


let dataItem = [
    {
        link: '/',
        label: 'Home',
    },
    {
        label: 'Error',
    }
]
const Error = () => {
    return (
        <div className='inner_page'>
            <Navigation/>
            <BreadCrumb breadcrumbitem={dataItem} breadcrumbtitle=''/>
            <section className="blog-one blog-one__blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <div className={`block-title mb-0 text-center`}>
                                <div className="block-title__text">
                                    404
                                    Not Found
                                    <br/>
                                    <Link to='/' className='cta-three__btn'>Go to Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <Subscription/>
            <Footer/>
            <ScrollTop scrollDuration={1000}/>
        </div>
    );
};

export default Error;