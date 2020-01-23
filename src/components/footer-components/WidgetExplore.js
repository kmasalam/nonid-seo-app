import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import WidgetTitle from './WidgetTitle';


let linkList = [
    {
        link: '#!',
        text: 'About',
    },
    {
        link: '#!',
        text: 'Our Team',
    },
    {
        link: '#!',
        text: 'Features',
    },
    {
        link: '#!',
        text: 'Blog',
    },
    {
        link: '#!',
        text: 'How It Works',
    },
]

const WidgetExplore = (props) => {
    return(
        <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget">
            <WidgetTitle titleText='Explore'/>
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

export default WidgetExplore;