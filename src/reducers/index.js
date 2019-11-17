const initialState = {
    books: [],
    isBooksLoading: true
};

const reducer = (state = initialState, action) => {
    console.log(`new action, state - ${state}, action type is ${action.type}`)
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                isBooksLoading: false
            };
        case 'BOOKS_LOADING':
            return {
                books:[],
                isBooksLoading: true
            };
        default:
            return state;
    }
};

export default reducer;