import React from 'react';
import {Link } from "react-router-dom";

const SidebarCategory = (props) => {
    const {title,categoryList} = props
    return(
        <div className="sidebar__single sidebar__category">
            <h3 className="sidebar__title">{title}</h3>
            <ul className="sidebar__category-list">
                {
                    categoryList.map((val,i)=> {
                        return(
                            <li className="sidebar__category-list-item" key={i}>
                                <Link to={val.link}>{val.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SidebarCategory;