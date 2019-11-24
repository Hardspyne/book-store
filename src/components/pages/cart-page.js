import React from 'react';
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const CartPage = () => {
    return (
        <div>
            <ShoppingCartTable/>
            <button type="button" className="btn btn-primary float-right"
                    style={{'clear': 'right', 'margin-top': '20px'}}>BUY!
            </button>

        </div>
    )
};

export default CartPage;