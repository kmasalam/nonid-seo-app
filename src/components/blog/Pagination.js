import React from 'react';

const Pagination = (props) => {
    return(
        <div className="blog-post-pagination text-center">
                <a className="prev" href="#">
                    <i className="fa fa-arrow-left" />
                </a>
                        <a className="active" href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <a href="#">05</a>
                        <a className="next" href="#">
                            <i className="fa fa-arrow-right" />
                        </a>
                </div>
    )
}

export default Pagination