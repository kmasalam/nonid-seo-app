import React, {Component} from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import SectionTitle from './SectionTitle';
import {BreakAfterString} from './Helper';
import {CtaOneBannerImage,CtaOneList,CtaOneParagraph,CtaTwoBannerImage,CtaTwoParagraph,CtaThreeImages,CtaTwoFeature,CtaThreeParagraph,CtaThreeImage} from './CallToActionContent';




export const  CtaOne = (props) => {

    return(
        <section className="cta-three">
            {
                CtaOneBannerImage.map((val,i)=>{
                    return(
                        <div key={i}>
                            <img src={val.bannerImage} alt={val.imageAlt} className={val.imageClass} />
                        </div>
                    )
                })
            }
            
            <div className="container">
                <img src="./assets/images/cta-moc-1-1.png" alt="Awesome Image" className="cta-three__moc" />
                <div className="row no-gutters justify-content-end">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex">
                    <div className="cta-three__content my-auto">
                   <SectionTitle 
                        TitleAlignment='' 
                        TitleData='Powerful tools for your customers' 
                        BreakingNumber={15} 
                    />

                    <p className="cta-three__text">
                        {CtaOneParagraph}
                    </p>{/* /.cta-three__text */}
                    <ul className="cta-three__list">
                        {
                            CtaOneList.map((item,i)=>{
                                return(
                                    <li className="cta-three__list-item" key={i}>
                                        <i className={item.listIcon} />
                                        {item.listContent}
                                    </li>
                                )
                            })
                        }
                    </ul>{/* /.cta-three__list */}
                    <Link to="/users" className='cta-three__btn'>Learn More</Link>
                    {/* <a to="/users" className="">Learn More</a> */}
                    </div>{/* /.cta-three__content */}
                </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
            </div>{/* /.container */}
        </section>

    )
}

export const CtaTwo = (props) => {
    return(
        <section className="cta-two" id="screens">
            {
                CtaTwoBannerImage.map((item,i)=>{
                    return(
                        <div key={i}>
                            <img src={item.bannerImage} alt={item.imageAlt} className={item.imageClass} />
                        </div>
                    )
                })
            }
            {/* <img src="images/banner-icon-1-2.png" alt="Awesome Image" className="bubble-1" />
            <img src="images/banner-icon-1-6.png" alt="Awesome Image" className="bubble-2" />
            <img src="images/banner-icon-1-3.png" alt="Awesome Image" className="bubble-3" />
            <img src="images/cta-moc-1-2.png" alt="Awesome Image" className="cta-two__moc" /> */}
            <div className="container">
                <hr />
                <div className="row">
                <div className="col-lg-6">
                    <div className="cta-two__content">
                    <SectionTitle 
                    TitleAlignment='' 
                    TitleData='Discover more new features' BreakingNumber={13} 
                    />
                    <div className="cta-two__feature">
                        {
                            CtaTwoFeature.map((item,i)=>{
                                return(
                                    <div className="cta-two__feature-single" key={i}>
                                        <i className={`${item.featureIcon} cta-two__feature-icon`} />
                                        <h3 className="cta-two__feature-title">
                                            <Link to='#!' >
                                                {item.featureTitle}
                                            </Link>
                                        </h3>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <p className="cta-two__text">
                        {CtaTwoParagraph}
                    </p>
                    <a href="#" className="cta-two__btn">Learn More</a>
                    </div>{/* /.cta-two__content */}
                </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
            </div>{/* /.container */}
        </section>

    )
}

export const CtaThree = (props) => {

    
    return(
        <section className="cta-one">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="cta-one__image-wrap">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                        <CtaThreeImage image={CtaThreeImages.imageOne.image} alt={CtaThreeImages.imageOne.alt}/>
                        <div className="cta-one__color-box cta-one__color-box-1" />
                        </div>{/* /.col-lg-6 */}
                        <div className="col-lg-6">
                        <div className="cta-one__color-box cta-one__color-box-2" />{/* /.cta-one__color-box */}
                        <CtaThreeImage image={CtaThreeImages.imageTwo.image} alt={CtaThreeImages.imageTwo.alt}/>
                        </div>{/* /.col-lg-6 */}
                    </div>{/* /.row no-gutters */}
                    </div>{/* /.cta-one__image-wrap */}
                </div>{/* /.col-lg-6 */}
                <div className="col-lg-6 d-flex">
                    <div className="cta-one__content my-auto">
                    <SectionTitle 
                        TitleAlignment='' 
                        TitleData='Marketing experts are
                        ready to help you' BreakingNumber={18} 
                    />
                    <p className="cta-one__text">
                        {CtaThreeParagraph}
                    </p>
                    <ul className="cta-one__list">
                    {
                            CtaOneList.map((item,i)=>{
                                return(
                                    <li className="cta-three__list-item" key={i}>
                                        <i className={item.listIcon} />
                                        {item.listContent}
                                    </li>
                                )
                            })
                        }
                    </ul>{/* /.cta-one__list */}
                    <Link to="/users" className='cta-one__btn'>Get Started</Link>
                    </div>{/* /.cta-one__content */}
                </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
            </div>{/* /.container */}
        </section>
    )
} 