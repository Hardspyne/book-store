import React from 'react';
import './shopping-cart-table.css';
import {connect} from "react-redux";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, index) => {
        const {id, title, count, total} = item;
        return (<tr>
            <td>{++index}</td>
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
    const {cartItems, orderTotal} = state;
    return {
        items: cartItems,
        total: orderTotal
    };
};

//маппинг свойств из redux к action
const mapDispatchToProps = (dispatch) => {
    return {};
//return bindActionCreators({booksLoaded, booksLoading, booksLoadingError}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);