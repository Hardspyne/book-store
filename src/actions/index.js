const booksLoaded = (newBookList) => {
    return {
        type: 'FETCH_BOOK_SUCCESS',
        payload: newBookList
    }
};


const booksLoading = () => {
    return {
        type: 'FETCH_BOOK_REQUEST',

    }
};

const booksLoadingError = (error) => {
    return {
        type: 'FETCH_BOOK_FAILURE',
        payload: error

    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId

    }
};
const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId

    }
};

const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId

    }
};

export {
    booksLoaded, booksLoading, booksLoadingError, bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart
};