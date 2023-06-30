import { createSelector } from "@reduxjs/toolkit";
import { CartItem } from "@/data/types";
import { RootState } from "@/store/store";

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
