import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import SectionTitle from './SectionTitle';

let PricingData = [
    {
        pricingCurrency: '$',
        pricingTitle: '20.00',
        packageName: 'basic pack',
        pricingFeature: [
            'Extra features',
            'Lifetime free support',
            'Upgrate options',
            'Full access',
        ],
        pricingBtnText: 'Choose Plan',
        packageNote: 'No hidden charges!',

    },
    {
        pricingCurrency: '$',
        pricingTitle: '30.00',
        packageName: 'Medium Pack',
        pricingFeature: [
            'Extra features',
            'Lifetime free support',
            'Upgrate options',
            'Full access',
        ],
        pricingBtnText: 'Choose Plan',
        packageNote: 'No hidden charges!',

    },
    {
        pricingCurrency: '$',
        pricingTitle: '50.00',
        packageName: 'Premium pack',
        pricingFeature: [
            'Extra features',
            'Lifetime free support',
            'Upgrate options',
            'Full access',
        ],
        pricingBtnText: 'Choose Plan',
        packageNote: 'No hidden charges!',

    }
]

const PricingTable = (props) => {
    return(
        <section className="pricing-one" id="pricing">
            <div className="container">
            <SectionTitle TitleAlignment='text-center' TitleData='Choose pricing plans which
suits your needs' BreakingNumber={23} />
                <div className="row">
                {
                        PricingData.map((val,i)=>{
                            return(
                            <div className="col-lg-4 col-md-4" key={i}>
                                <div className="pricing-one__single">
                                <div className="pricing-one__top">
                                    <h3 className="pricing-one__title">
                                        {val.pricingCurrency}
                                        {val.pricingTitle}
                                    </h3>
                                    <p className="pricing-one__pack">
                                        {val.packageName}
                                    </p>
                                </div>{/* /.pricing-one__top */}
                                <ul className="pricing-one__feature">
                                    {
                                        val.pricingFeature.map((val,i)=>{
                                            return(
                                            <li className="pricing-one__feature-item" key={i}>{val}</li>
                                            )
                                        })
                                    }
                                   
                                </ul>{/* /.pricing-one__feature */}
                                <Link to='!#' className="pricing-one__btn">{val.pricingBtnText}</Link>
                                <p className="pricing-one__note">{val.packageNote}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>{/* /.row */}
            </div>{/* /.container */}
        </section>

    )
}

export default PricingTable