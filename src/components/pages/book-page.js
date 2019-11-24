import React from 'react';
import {bookAddedToCart, booksLoaded, booksLoadingError} from "../../actions";
import {connect} from "react-redux";
import compose from "../../utils";
import BookItem from "../../book-item-page";
import {withRouter} from 'react-router-dom';
import ErrorIndicator from "../error-indicator";
import {withBookStoreService} from "../hoc";
import Spinner from "../spinner";


class BookPage extends React.Component {

    componentDidMount() {
        const {fetchBook} = this.props;
        const bookId = this.getChosenBookId();

        const book = this.findBook(bookId);
        if (!book) {
            fetchBook(bookId);
        }
    }

    findBook(bookId) {
        const {books} = this.props;
        return books.find(book => book.id === bookId);
    }

    getChosenBookId() {
        const {match} = this.props;
        return Number(match.params.id);
    }

    render() {
        const {onAddedToCart, error, isBooksLoading} = this.props;
        if (error) {
            return <ErrorIndicator errorText={`Book not found!`}/>
        } else if (isBooksLoading) {
            return <Spinner/>;
        }
        const bookId = this.getChosenBookId();
        const book = this.findBook(bookId);
        return <BookItem book={book} onAddedToCart={() => onAddedToCart(bookId)}/>
    }
}

//маппинг свойств из redux к props компонента
const mapStateToProps = (state) => {
    const {bookList: {books, error, isBooksLoading}} = state;
    return {
        books, error, isBooksLoading
    };
};

//маппинг свойств из redux к action
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
        fetchBook: (id) => {
            ownProps.bookStoreService.getBook(id)
                .then(book => {
                    console.log(book);
                    dispatch(booksLoaded([book]))
                })
                .catch(error => dispatch(booksLoadingError(error)));
        }
    }
};


export default compose(
    withBookStoreService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(BookPage);