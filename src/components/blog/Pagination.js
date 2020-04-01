import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = (props) => {
    return(
        <div className="blog-post-pagination text-center">
                <a className="prev" href="#">
                    <i className="fa fa-arrow-left" />
                </a>
                        <Link  className="active" to="#">01</Link>
                        <Link to="#">02</Link>
                        <Link to="#">03</Link>
                        <Link to="#">04</Link>
                        <Link to="#">05</Link>
                        <Link className="next" to="#">
                            <i className="fa fa-arrow-right" />
                        </Link>
                </div>
    )
}

export default Pagination