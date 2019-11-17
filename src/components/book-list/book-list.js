import React from 'react';
import './book-list.css';
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookStoreService} from '../hoc';
import {booksLoaded, booksLoading} from "../../actions";
import {bindActionCreators} from "redux";
import compose from '../../utils';
import Spinner from "../spinner";

class BookList extends React.Component {


    componentDidMount() {
        const {bookStoreService, booksLoaded, booksLoading} = this.props;
        booksLoading();
        bookStoreService.getBooks()
            .then(books => booksLoaded(books));
    }

    render() {
        const {books, isBooksLoading} = this.props;

        if (isBooksLoading) {
            return <Spinner/>;
        }

        return (
            <ul className={'book-list'}>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

//маппинг свойств из redux к props компонента
const mapStateToProps = (state) => {
    const {books, isBooksLoading} = state;
    return {
        books,
        isBooksLoading
    };
};

//маппинг свойств из redux к action
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded, booksLoading}, dispatch);
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withBookStoreService()
)(BookList);
