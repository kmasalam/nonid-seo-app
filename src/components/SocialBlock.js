import React,{Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";

const  SocialBlock = (props) => {
    const {link,className} = props
    return(
        <Link to={link}>
            <i className={className} />
        </Link>
    )
}

export default SocialBlock;

