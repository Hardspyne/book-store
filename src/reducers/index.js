import updateShoppingCart from "./shopping-cart";
import updateBookList from "./bookList";

const reducer = (state, action) => {
    console.log(`new action, state - ${state}, action type is ${action.type}`);
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};


export default reducer;