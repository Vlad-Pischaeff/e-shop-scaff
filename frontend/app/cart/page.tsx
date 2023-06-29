"use client";

import React from 'react';
import { TotalPriceSelector, selectCartItems } from '@/store/slices/cartSlice';
import { useAppSelector } from '@/store/store';
import { ShoppingCartItem } from '@/components/cart/ShoppingCartItem';
import s from './page.module.sass';

export default function CartPage() {
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(TotalPriceSelector);

    return (
        <section className={s.cartContainer}>
            <div className={s.cartItemsContainer}>
                {Object.values(cartItems).map((item) => (
                    <div key={item.product.id}>
                        <ShoppingCartItem item={item} />
                    </div>
                ))}
            </div>

            <p className={s.total}>
                <span className={s.totalTitle}>
                    Total Price:{" "}
                </span>
                <span className={s.totalPrice}>
                    {totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                </span>
            </p>
        </section>
    );
};
