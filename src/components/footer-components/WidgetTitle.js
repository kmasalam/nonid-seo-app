import React, {Component} from 'react';

 const WidgetTitle = (props) => {
    const {titleText} = props
    return(
        <h3 className="footer-widget__title">
            {titleText}
        </h3>
    )
}

export default WidgetTitle