import React,{Component} from 'react';
// import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import { Link as DomLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

let logoData = {
    src: '/assets/images/logo-1-1.png',
    alt: 'Awesome Image',
    to: '/'
}



class Navigation extends React.Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            sticky: true,
            mobileMenu: false,
        }
        // this.nav = React.createRef();
    }

    handleMobileMenu = () => {
        this.setState({
            mobileMenu: this.state.mobileMenu ? false : true
        })
    }
    
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }
 
    handleScroll = () => {
        if(window.pageYOffset > 100){
            this._isMounted = true;
            if(this._isMounted){
                this.setState({
                sticky: true
            })
        }
           
        } else {
            
            this._isMounted = false;
            if(!this._isMounted){
                this.setState({
                sticky: false
            })
            }
            
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render(){
        const {sticky,mobileMenu} = this.state
        // const {src,alt,link} = this.props
        
        return(
                
            <header className={`site-header header-one  ${sticky ? 'sticky' : ''}`} >
                
                <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
                    <div className="container clearfix">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="logo-box clearfix">
                        <DomLink to={process.env.PUBLIC_URL+logoData.to} className="navbar-brand" >
                            <img src={process.env.PUBLIC_URL+logoData.src} className="main-logo" alt={logoData.alt} />
                        </DomLink>
                        <button className="menu-toggler" onClick={this.handleMobileMenu} >
                            <span className="fa fa-bars" />
                        </button>
                    </div>{/* /.logo-box */}
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className={`main-navigation ${mobileMenu ? 'showen' : ''}`} style={mobileMenu ? {display: "block" } : {display: "none" }}>
                    <ul className='navigation-box one-page-scroll-menu'>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                            <ul className='sub-menu'>
                                <li>
                                    <DomLink to='/'>Home One</DomLink>
                                </li>
                                <li>
                                    <DomLink to='/home-two'>Home Two</DomLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="screens"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                App Screens
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="pricing"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Blog
                            </Link>
                            <ul className='sub-menu'>
                                <li>
                                    <DomLink to='/blog'>Blog</DomLink>
                                </li>
                                <li>
                                    <DomLink to='blog/1'>
                                        Blog Details
                                    </DomLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                    <div className="right-side-box">
                        <DomLink to='#!' className="header-one__btn">
                            Contact
                        </DomLink>
                    </div>{/* /.right-side-box */}
                    </div>
                    {/* /.container */}
                </nav>
                
                </header>
        )
    }
}

export default Navigation;