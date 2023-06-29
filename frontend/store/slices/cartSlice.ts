import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product, Cart } from "@/data/types";
import { RootState } from "@/store/store";

const initialState: Cart = {
    cartItems: {},
    version: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<Product>) => {
            const productInCart = state.cartItems[action.payload.id];

            if (productInCart) {
                productInCart.qty += 1;
            } else {
                state.cartItems[action.payload.id] = {
                    product: action.payload,
                    qty: 1
                };
            }
        },
        decrement: (state, action: PayloadAction<Product>) => {
            const productInCart = state.cartItems[action.payload.id];

            if (!productInCart) {
                return;
            }

            if (productInCart.qty > 1) {
                productInCart.qty -= 1;
            } else {
                delete state.cartItems[action.payload.id]
            }
        },
        removeItem: (state, action: PayloadAction<Product["id"]>) => {
            const productInCart = state.cartItems[action.payload];

            if (!productInCart) {
                return;
            }
            delete state.cartItems[action.payload];
        },
        clearCart: (state) => {
            state.cartItems = {};
        },
    },
});

export const selectCartItems = (state: RootState) => state.cart.cartItems;
const cartItems = selectCartItems;

export const productQtyInCartSelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) => cartItems[productId]?.qty
);

export const totalCartItemsSelector = createSelector(
    [cartItems],
    (cartItems) =>
        Object.values(cartItems).reduce(
            (total: number, el: CartItem) =>
                (total += el.qty),
            0
        )
);

export const TotalPriceSelector = createSelector(
    [cartItems],
    (cartItems) =>
        Object.values(cartItems).reduce(
            (total: number, curr: CartItem) =>
                (total += curr.qty * curr.product.price),
            0
        )
);

export const { increment, decrement, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
