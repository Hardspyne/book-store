import React from 'react';
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";
import {connect} from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import compose from "../../utils";
import {withBookStoreService} from "../hoc";
import {bookAddedToCart, booksLoaded, booksLoading, booksLoadingError} from "../../actions";

class HomePage extends React.Component {

    componentDidMount() {
        const {fetchBooks} = this.props;
        fetchBooks();
    }

    render() {
        const {isBooksLoading, error, books, onAddedToCart} = this.props;
        if (isBooksLoading) {
            return <Spinner/>;
        } else if (error) {
            return <ErrorIndicator/>;
        }

        return (
            <div>
                <BookList books={books} onAddedToCart={onAddedToCart}/>
                <ShoppingCartTable/>
            </div>

        )
    }

}

//маппинг свойств из redux к props компонента
const mapStateToProps = (state) => {
    const {bookList: {isBooksLoading, error, books}} = state;
    return {
        isBooksLoading,
        error,
        books
    };
};


//маппинг свойств из redux к action
const mapDispatchToProps = (dispatch, ownProps /*свойства компонента*/) => {
    return {
        fetchBooks: () => {
            dispatch(booksLoading());
            ownProps.bookStoreService.getBooks()
                .then(books => dispatch(booksLoaded(books)))
                .catch(error => dispatch(booksLoadingError(error)));
        },
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
