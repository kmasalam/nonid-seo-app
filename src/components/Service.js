import React, {Component} from 'react';
import SectionTitle from './SectionTitle';


let data = [
    {
        iconName: 'nonid-icon-laptop',
        serviceTitle: 'Speed  Optimization',
        serviceContent: 'Lorem ipsum is are  many variations of  pass of majority.',
        serviceArrowIcon: 'nonid-icon-left-arrow',
    },
    {
        iconName: 'nonid-icon-presentation',
        serviceTitle: 'Marketing  Analysis',
        serviceContent: 'Lorem ipsum is are  many variations of  pass of majority.',
        serviceArrowIcon: 'nonid-icon-left-arrow',
    },
    {
        iconName: 'nonid-icon-target',
        serviceTitle: 'SEO and  Backlinks',
        serviceContent: 'Lorem ipsum is are  many variations of  pass of majority.',
        serviceArrowIcon: 'nonid-icon-left-arrow',
    },
    {
        iconName: 'nonid-icon-visualization',
        serviceTitle: 'Content  Marketing',
        serviceContent: 'Lorem ipsum is are  many variations of  pass of majority.',
        serviceArrowIcon: 'nonid-icon-left-arrow',
    },
]

let serviceList = data.map((val,i)=> {
    return(
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12" key={i}>
            <div className="service-one__single">
            <i className={`service-one__icon ${val.iconName}`} />
            <h3 className="service-one__title"><a href="#">{val.serviceTitle}</a></h3>
            <p className="service-one__text">
                {val.serviceContent}
            </p>
            <a href="#" className="service-one__link"><i className={`${val.serviceArrowIcon}`} /></a>
            </div>
        </div>
    )
})
const Service = () => {
    return(
        <section className="service-one" id="services">
            <div className="container">
                <SectionTitle TitleAlignment='text-center' TitleData='Nodin agency can boost
up your web traffic' BreakingNumber={23} />
                <div className="row">
                    
                    {serviceList}
               
               
                </div>
            </div>{/* /.container */}
        </section>

    )
}

export default Service;