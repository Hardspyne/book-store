import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({count, total}) => {

    return (
        <header className={'shop-header'}>
            <Link to={'/'}>
                <div className={'shop-name'}>ReStore</div>
            </Link>

            <Link to={'/cart'}>
                <div>
                    <i className={'cart-icon fa fa-shopping-cart'}/>
                    {count} items (${total})
                </div>
            </Link>
        </header>
    )
};


//маппинг свойств из redux к props компонента
const mapStateToProps = (state) => {
    const {shoppingCart: {totalCount, orderTotal}} = state;
    return {
        count: totalCount,
        total: orderTotal
    };
};

export default connect(mapStateToProps)(Header);