import React from 'react';

import "./custom-button.styles.scss"




class CustomButton extends React.Component {

    
    render() {
        const { href, text } = this.props;
        return (
            <div className='custom-button '>
                <a className="button" data-type={text} href={href}>{text}</a>
                        
            </div>
        )
    }
} 

export default CustomButton;
