import React from 'react';
import { Link } from "react-router-dom";

const LatestPost = (props) => {
    const {image,alt,title,link} = props
    return(
        <div className="sidebar__post__single">
            <div className="sidebar__post-image">
            <div className="inner-block">
                <img src={image} alt={alt} /></div>
            </div>
            <div className="sidebar__post-content">
            <h4 className="sidebar__post-title">
            <Link to={link}>{title}</Link>
            </h4>
            </div>
        </div>
    )
}

export default LatestPost;