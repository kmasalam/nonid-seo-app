import React from 'react';
import { Link } from "react-router-dom";

const SidebarTags = (props) => {
    const {title,tagsList} = props
    return(
        <div className="sidebar__single sidebar__tags">
            <h3 className="sidebar__title">{title}</h3>{/* /.sidebar__title */}
            <ul className="sidebar__tags-list">
                {
                    tagsList.map((val,i)=>{
                        return(
                            <li className="sidebar__tags-list-item" key={i}>
                                <Link to={val.link}>{val.label} ,</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SidebarTags