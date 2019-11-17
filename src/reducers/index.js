const initialState = {
    books: [],
    isBooksLoading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};


const reducer = (state = initialState, action) => {
    console.log(`new action, state - ${state}, action type is ${action.type}`);


    switch (action.type) {
        case 'FETCH_BOOK_SUCCESS':
            return {
                ...state,
                books: action.payload,
                isBooksLoading: false,
                error: null
            };
        case 'FETCH_BOOK_REQUEST':
            return {
                ...state,
                books: [],
                isBooksLoading: true,
                error: null
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;

            const itemIndex = state.cartItems.findIndex(item => item.id === bookId);
            const item = state.cartItems[itemIndex];
            const book = state.books.find(book => book.id === bookId);
            let newItem = updateCartItem(book, item);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            };
        case 'FETCH_BOOK_FAILURE':
            return {
                ...state,
                error: action.payload,
                books: [],
                isBooksLoading: false
            };
        default:
            return state;
    }
};

const updateCartItems = (cartItems, item, index) => {
    if (index === -1) {
        return [...cartItems, item];
    } else {
        return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)]
    }
};

const updateCartItem = (book, item = {}) => {
    const {id = book.id, count = 0, title = book.title, total = 0} = item;

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
};
export default reducer;