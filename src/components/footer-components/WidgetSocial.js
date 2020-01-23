import React, {Component} from 'react';
import SocialBlock from '../SocialBlock';


let SociaData = [
    {
        link: '#!',
        className: 'fa fa-twitter',
    },
    {
        link: '#!',
        className: 'fa fa-facebook-f',
    },
    {
        link: '#!',
        className: 'fa fa-linkedin',
    },
    {
        link: '#!',
        className: 'fa fa-youtube-play',
    },
]
const WidgetSocial = (props) => {
    return(
        <div className="col-lg-2 col-md-6 col-sm-12 d-flex">
            <div className="footer-widget my-auto">
            <div className="social-block">
                {
                    SociaData.map((val,i)=>{
                        return(
                            <SocialBlock link={val.link} key={i} className={val.className}  />
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default WidgetSocial;