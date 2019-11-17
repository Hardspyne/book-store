const initialState = {
    books: [],
    booksLoading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                booksLoading: false
            };
        default:
            return state;
    }
};

export default reducer;