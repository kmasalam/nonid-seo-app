import React, {Component} from 'react';
import { Waypoint } from 'react-waypoint';
import SectionTitle from './SectionTitle';
import CountUp from 'react-countup';

// const TitleContent = (props) => {
//     return(
//         <div className={`block-title  ${TitleAlignment}`}>
//             <div className="block-title__text">
//                 {document.write(texting)}
//                 <div dangerouslySetInnerHTML={dangerHTML} />
//             </div>
//         </div>
//     )
// }

let FunFactsImages = [
    {
        image: './assets/images/banner-icon-1-4.png',
        alt: 'Awesome Image',
        className: 'bubble-1'
    },
    {
        image: './assets/images/banner-icon-1-2.png',
        alt: 'Awesome Image',
        className: 'bubble-2'
    },
    {
        image: './assets/images/banner-icon-1-1.png',
        alt: 'Awesome Image',
        className: 'bubble-3'
    },
    {
        image: './assets/images/banner-icon-1-6.png',
        alt: 'Awesome Image',
        className: 'bubble-4'
    }
]

let FunFactorsData = [
    {
        factorsNumber: 4789,
        factorsTitle: 'Projects',
    },
    {
        factorsNumber: 6400,
        factorsTitle: 'Customers',
    },
    {
        factorsNumber: 960,
        factorsTitle: 'Success',
    },
    {
        factorsNumber: 448,
        factorsTitle: 'Awards',
    }
]

class funFactors extends React.Component{
    state = {
        data: false
    }
    handleClick = () => {
        this.setState({
            data: true
        })
    }

    render(){
        return(
            <section className="fun-fact-one">
                {
                    FunFactsImages.map((val,i)=>{
                        return(
                            <div key={i}>
                                 <img src={val.image} alt={val.alt} className={val.className} />
                            </div>
                        )
                    })
                }
                <div className="container">
                    
                <SectionTitle TitleAlignment='text-center' TitleData='Nodin agency can boost
up your web traffic' BreakingNumber={23} />
                <Waypoint onEnter={this.handleClick} bottomOffset='60%' /> 
                <div className="fun-fact-one__box-wrapper">
                    {
                        FunFactorsData.map((val,i)=>{
                            return(
                                <div className="fun-fact-one__single" key={i}>
                                    <div className="inner-block">
                                        <h3 className="fun-fact-one__title counter">
                                            {
                                            this.state.data ? <CountUp start={0} end={val.factorsNumber} delay={0}>
                                            {({ countUpRef }) => (
                                                    <span ref={countUpRef} /> 
                                            )}
                                            </CountUp> : val.factorsNumber
                                            }
                                        </h3>
                                        <p className="fun-fact-one__text">
                                        {val.factorsTitle}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                


                </div>
                </div>
            </section>
        )
    }
}

export default funFactors;