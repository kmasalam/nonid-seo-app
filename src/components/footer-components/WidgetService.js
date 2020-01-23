import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import WidgetTitle from './WidgetTitle';

let linkList = [
    {
        link: '#!',
        text: 'Speed Optimization',
    },
    {
        link: '#!',
        text: 'Marketing Analysis',
    },
    {
        link: '#!',
        text: 'SEO and Backlinks',
    },
    {
        link: '#!',
        text: 'Content Marketing',
    },
]
const WidgetService = (props) => {
    return(
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget">
                <WidgetTitle titleText='Services'/>
                <ul className="footer-widget__link-list">
                    {
                        linkList.map((val,i)=> {
                            return(
                                <li key={i}>
                                    <Link to={val.link}>{val.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default WidgetService;