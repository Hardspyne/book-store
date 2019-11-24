import React from 'react';
import './book-list-item.css';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {bookAddedToCart} from "../../actions";
import {connect} from "react-redux";

const BookListItem = ({book, onAddedToCart}) => {
    const {title, author, price, bookImageUrl} = book;
    return (
        <div className={'book-list-item'}>
            <Link to={`/books/${book.id}`} className = {'book-image'}>
                <img src={bookImageUrl} alt={'book'}/>
            </Link>
            <div className={'book-details'}>
                <Link to={`/books/${book.id}`} className={'book-title'}>{title}</Link>
                <div className={'book-author'}>{author}</div>
                <div className={'book-price'}>${price}</div>
                <button onClick={onAddedToCart}
                        className={'btn btn-info add-to-cart'}>Add to cart
                </button>
            </div>
        </div>)
};


//маппинг свойств из redux к props компонента
const mapStateToProps = (state) => {
    const {bookList: {books}} = state;
    return {
        books
    };
};

//маппинг свойств из redux к action
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        bookAddedToCart: bookAddedToCart,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);