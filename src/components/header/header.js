import React from 'react';
import './header.css';

const Header = ({numItems, total}) => {

    return (
        <header className={'shop-header'}>
            <a className={'shop-name'} href='#'>ReStore</a>
            <a href='#'>
                <i className={'cart-icon fa fa-shopping-cart'}/>
                {numItems} items (${total})
            </a>
        </header>
    )
};

export default Header;