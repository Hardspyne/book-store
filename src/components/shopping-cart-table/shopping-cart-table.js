import React from 'react';
import './shopping-cart-table.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart} from "../../actions";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    console.log(total);
    const renderRow = (item, index) => {
        const {id, title, count, total} = item;
        index = ++index;
        return (<tr key={index}>
            <td>{index}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>{total}</td>
            <td>
                <button onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"/>
                </button>
                <button onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-plus-circle"/>
                </button>
                <button onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                    <i className="fa fa-minus-circle"/>
                </button>
            </td>
        </tr>)
    };

    return (
        <div className={'shopping-cart-table'}>
            <h2>Your Order</h2>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total Price</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>

            <div className={'total'}>
                Total: ${total}
            </div>
        </div>
    )
};


//маппинг свойств из redux к props компонента
const mapStateToProps = (state) => {
    const {shoppingCart: {cartItems, orderTotal}} = state;
    return {
        items: cartItems,
        total: orderTotal
    };
};

//маппинг свойств из redux к action
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onIncrease: bookAddedToCart,
        onDecrease: bookRemovedFromCart,
        onDelete: allBooksRemovedFromCart
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);