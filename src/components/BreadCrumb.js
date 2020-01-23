import React,{Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";

class BreadCrumb extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {breadcrumbitem,breadcrumbtitle} = this.props
        return(
            <section className="inner-banner">
                <div className="container text-center">
                    <ul className="thm-breadcrumb">
                    {
                        breadcrumbitem.map((val, i) => {
                            if (breadcrumbitem.length - 1 === i) {
                               return(
                                <li className="thm-breadcrumb__item" key={i}>
                                    <span>
                                        {val.label}
                                    </span>
                                </li>
                               )
                            } 
                            else {
                                return(
                                    <li className="thm-breadcrumb__item" key={i}>
                                        <Link to={val.link} >
                                            {val.label}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                    </ul>{/* /.thm-breadcrumb */}
                <h2 className="inner-banner__title"><span>{breadcrumbtitle}</span></h2>{/* /.inner-banner__title */}
                </div>{/* /.container */}
            </section>
        )
    }
}

export default BreadCrumb;
