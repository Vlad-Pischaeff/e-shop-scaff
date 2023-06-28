"use client";

import React from 'react';
import { TotalPriceSelector, selectCartItems } from '@/store/slices/cartSliceObj';
import { useAppSelector } from '@/store/store';
import s from './page.module.sass';

export default function CartPage() {
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(TotalPriceSelector);

    return (
        <div className="p-2">
            {Object.values(cartItems).map((item) => (
                <div key={item.product.id}>{item.product.shortname}</div>
            ))}

            <p className="text-slate-600">
                Total Price:{" "}
                <span className="text-slate-900 font-bold">
                {totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                </span>
            </p>
        </div>
    );
};
