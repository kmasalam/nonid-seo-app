import React,{Component} from 'react';

class ScrollTop extends React.Component{
    _isMounted = false;
    state = {
        available: false
    }
    componentDidMount = () => {
        this._isMounted = true;
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var body = document.body,
        html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

        let actualHeight = height / 2;
        if(window.pageYOffset > actualHeight){
            if(this._isMounted){
                this.setState({
                    available: true
                })
            }
        } else {
            this.setState({
                available: false
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleClick = (e) => {
        e.preventDefault();
        
        var scrollStep = -window.scrollY / (this.props.scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
        },15); 
    }

    render(){
        const {available}  = this.state
        return(
            <div>
                {
                    available ? <div  onClick={this.handleClick} className="scroll-to-target scroll-to-top">
                    <i className="fa fa-angle-up" />
                </div> : ''
                }
            </div>
            
        )
    }
}

export default ScrollTop;