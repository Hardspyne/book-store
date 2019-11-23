import updateShoppingCart from "./shopping-cart";
import updateBookList from "./bookList";

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};


export default reducer;