import React from 'react';
import './book-list.css';
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookStoreService} from '../hoc';
import {booksLoaded} from "../../actions";
import {bindActionCreators} from "redux";
import compose from '../../utils';

class BookList extends React.Component {


    componentDidMount() {
        const {bookStoreService, booksLoaded} = this.props;
        const books = bookStoreService.getBooks();
        booksLoaded(books);
    }

    render() {
        const {books} = this.props;

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
    const {books} = state;
    return {
        books
    };
};

//маппинг свойств из redux к action
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded}, dispatch);
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withBookStoreService()
)(BookList);
