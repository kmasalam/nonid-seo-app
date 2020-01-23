import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";

let infoData = {
    logolink: '/',
    logoalt: 'Awesome Image',
    footerlogo: './assets/images/logo-1-1.png',
    phonenumber: '888 999 0000',
    mail: 'needhelp@nonid.com',
    address1: '855 road, broklyn street',
    address2: 'new york 600',

}
const WidgetInfo = (props) => {
    return(
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget footer-widget--about-widget">
            <Link to={infoData.logolink} className="footer-widget__footer-logo">
                <img src={infoData.footerlogo} alt={infoData.logoalt} />
            </Link>
            <p>{infoData.phonenumber}</p>
            <p>{infoData.mail}</p>
            <p>{infoData.address1} <br />
            {infoData.address2}
            </p>
            </div>
        </div>
    )
}

export default WidgetInfo;