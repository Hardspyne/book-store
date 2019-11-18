const updateBookList = (state, action) => {
    if (!state) {
        return {
            books: [],
            isBooksLoading: true,
            error: null
        }
    }
    switch (action.type) {
        case 'FETCH_BOOK_SUCCESS':
            return {
                books: action.payload,
                isBooksLoading: false,
                error: null
            };
        case 'FETCH_BOOK_REQUEST':
            return {
                books: [],
                isBooksLoading: true,
                error: null
            };
        case 'FETCH_BOOK_FAILURE':
            return {
                error: action.payload,
                books: [],
                isBooksLoading: false
            };
        default:
            return state.bookList;
    }

};

export default  updateBookList;