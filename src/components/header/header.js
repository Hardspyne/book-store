import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

const Header = ({numItems, total}) => {

    return (
        <header className={'shop-header'}>
            <Link to={'/'}>
            <div className={'shop-name'} >ReStore</div>
            </Link>

            <Link to={'/cart'}>
            <div>
                <i className={'cart-icon fa fa-shopping-cart'}/>
                {numItems} items (${total})
            </div>
            </Link>
        </header>
    )
};

export default Header;