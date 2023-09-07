import React from 'react';
import { TotalPriceSelector, selectCartItems, totalCartItemsSelector } from '@/store/slices/selectors';
import { useAppSelector } from '@/store/store';
import { CartSummary } from '@/components/templates/CartSummary';

export function ShoppingCartSumm(
    { onSubmit }:
    { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }
) {
    const cartItems = useAppSelector(selectCartItems);
    const totalCartPcs = useAppSelector(totalCartItemsSelector);
    const totalPrice = useAppSelector(TotalPriceSelector);
    const totalCartItems = Object.keys(cartItems).length;

    return (
        <CartSummary onSubmit={onSubmit}>
            <CartSummary.TotalValue title='Total:'>
                {totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
            </CartSummary.TotalValue>
            <CartSummary.TotalValue title='Items:'>
                {totalCartItems}
            </CartSummary.TotalValue>
            <CartSummary.TotalValue title='Pcs:'>
                {totalCartPcs}
            </CartSummary.TotalValue>
            <CartSummary.PaymentButton active={totalPrice !== 0} />
        </CartSummary>
    )
}
