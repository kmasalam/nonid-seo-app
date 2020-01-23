import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";


let linkList = [
    {
        link: '#!',
        linkText: 'Help',
    },
    {
        link: '#!',
        linkText: 'Support',
    },
    {
        link: '#!',
        linkText: 'Clients',
    },
    {
        link: '#!',
        linkText: 'Contact',
    }
]
const WidgetLinks = (props) => {
    return(
        <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget">
            <h3 className="footer-widget__title">
                Links
            </h3>
            <ul className="footer-widget__link-list">
                {
                    linkList.map((val,i)=> {
                        return(
                            <li key={i}>
                                <Link to={val.link}>{val.linkText}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        </div>
    )
}

export default WidgetLinks;