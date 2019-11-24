import React from 'react';
import './book-item.css';

const BookItem = ({book, onAddedToCart}) => {
    const {title, author, price, bookImageUrl, description} = book;
    return (
        <div className={'book-item'}>
                <img src={bookImageUrl} alt={'book'}/>
                <div className={'book-title'}>{title}</div>
                <div className={'book-author'}>{author}</div>
                <div className={'book-description'}>{description}</div>
                <div className={'book-price'}>${price}</div>
                <button onClick={onAddedToCart}
                        className={'btn btn-info add-to-cart'}>Add to cart
                </button>
        </div>)
};

export default BookItem;