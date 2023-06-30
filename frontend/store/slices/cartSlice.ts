import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Cart } from "@/data/types";

const initialState: Cart = {
    cartItems: {},
    version: 0,
};

function getProductFromCart(state: Cart, productId: number) {
    return state.cartItems[productId];
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        /** Increments the quantity of a product in the cart. */
        increment: (state: Cart, action: PayloadAction<Product>) => {
            const productInCart = getProductFromCart(state, action.payload.id);

            if (productInCart) {
                productInCart.qty += 1;
            } else {
                state.cartItems[action.payload.id] = {
                    product: action.payload,
                    qty: 1
                };
            }
        },
        /** Decrements the quantity of a product in the cart. */
        decrement: (state: Cart, action: PayloadAction<Product>) => {
            const productInCart = getProductFromCart(state, action.payload.id);

            if (!productInCart) return;

            if (productInCart.qty > 1) {
                productInCart.qty -= 1;
            } else {
                delete state.cartItems[action.payload.id];
            }
        },
        /** Removes item from the cart. */
        removeItem: (state: Cart, action: PayloadAction<Product["id"]>) => {
            const productInCart = getProductFromCart(state, action.payload);

            if (!productInCart) return;

            delete state.cartItems[action.payload];
        },
        /** Removes all items from the cart. */
        clearCart: (state: Cart) => {
            state.cartItems = {};
        },
    },
});

export const { increment, decrement, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
