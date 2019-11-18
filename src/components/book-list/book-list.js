import React from 'react';
import './book-list.css';
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookStoreService} from '../hoc';
import {booksLoaded, booksLoading, booksLoadingError, bookAddedToCart} from "../../actions";
import compose from '../../utils';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

/*
redux рекоммендует создавать объекты контейнеры, которые отвечают за логику работы с store.
 */
class BookListContainer extends React.Component {


    componentDidMount() {
        const {fetchBooks} = this.props;
        fetchBooks();
    }

    render() {
        const {books, isBooksLoading, error, onAddedToCart} = this.props;

        if (isBooksLoading) {
            return <Spinner/>;
        } else if (error) {
            return <ErrorIndicator/>;
        }

        return (<BookList books={books} onAddedToCart={onAddedToCart}/>);
    }
}

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className={'book-list'}>
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};

//маппинг свойств из redux к props компонента
const mapStateToProps = (state) => {
    const {bookList:{books, isBooksLoading, error}} = state;
    return {
        books,
        isBooksLoading,
        error
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
//return bindActionCreators({booksLoaded, booksLoading, booksLoadingError}, dispatch);
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
