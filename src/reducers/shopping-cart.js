const updateShoppingCart = (state, action) => {
    if (!state) {
        return {
            cartItems: [],
            orderTotal: 0,
            totalCount: 0
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(item => item.id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        default:
            return state.shoppingCart;
    }
};


const updateOrder = (state, bookId, addedQuantity) => {

    const {shoppingCart: {cartItems}, bookList: {books}} = state;
    const itemIndex = cartItems.findIndex(item => item.id === bookId);
    const item = cartItems[itemIndex];
    const book = books.find(book => book.id === bookId);
    let newItem = updateCartItem(book, item, addedQuantity);
    const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
    return {
        orderTotal: calcTotal(newCartItems),
        cartItems: newCartItems,
        totalCount: calcTotalCount(newCartItems)
    }
};


const updateCartItems = (cartItems, item, index) => {
    if (item.count === 0) {
        return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)]
    }
    if (index === -1) {
        return [...cartItems, item];
    } else {
        return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)]
    }
};

const updateCartItem = (book, item = {}, addedQuantity) => {
    const {id = book.id, count = 0, title = book.title, total = 0} = item;

    return {
        id,
        title,
        count: count + addedQuantity,
        total: toFixedNumber(total + book.price * addedQuantity)
    }
};

const calcTotalCount = (cartItems) => cartItems
    .map((mapItem) => mapItem.count)
    .reduce((prevValue, newValue) => prevValue + newValue, 0);

const calcTotal = (cartItems) => toFixedNumber(cartItems
    .map((mapItem) => mapItem.total)
    .reduce((prevValue, newValue) => prevValue + newValue, 0));

const toFixedNumber = (num) => Number(Number(num).toFixed(2));

export default updateShoppingCart;