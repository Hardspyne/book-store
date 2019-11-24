import React from 'react';
import './error-indicator.css';
import {Link} from "react-router-dom";

const ErrorIndicator = ({errorText = 'something has gone terribly wrong'}) => {
    return (<div className="error-indicator">
        <span className="error-header">OOPS!</span>
        <span>
            {errorText}
      </span>
        <div>
            <Link className='main-page-link' to={'/'}>Go to main page</Link>
            <span> or </span>
            <span className={'main-page-link'} onClick={() => window.location.reload()}>Reload</span>
        </div>
    </div>)
};

export default ErrorIndicator;