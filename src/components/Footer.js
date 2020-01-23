import React,{Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import WidgetInfo from './footer-components/WidgetInfo';
import WidgetExplore from './footer-components/WidgetExplore';
import WidgetService from './footer-components/WidgetService';
import WidgetLinks from './footer-components/WidgetLinks';
import WidgetSocial from './footer-components/WidgetSocial';


let footerBottomData = {
    footertext: '© copyright 2019 by ',
    companylink: '/',
    companytext: 'Layerdrops.com',
}

const Footer = (props) => {
    return(
        <footer>
            <div className="site-footer__main-footer">
                <div className="container">
                    <div className="row">
                        <WidgetInfo/>
                        <WidgetExplore/>
                        <WidgetService/>
                        <WidgetLinks/>
                        <WidgetSocial/>

                    </div>
                </div>
            </div>
            <div className="site-footer__bottom-footer text-center">
                <div className="container">
                    <p>{footerBottomData.companytext}
                        <Link to={footerBottomData.companylink}>{footerBottomData.companytext}</Link>
                    </p>
                </div>
            </div>


        </footer>
    )
}

export default Footer;