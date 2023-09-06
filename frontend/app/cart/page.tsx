"use client";

import styled from 'styled-components';
import { TotalPriceSelector, selectCartItems, totalCartItemsSelector } from '@/store/slices/selectors';
import { useAppSelector } from '@/store/store';
import { ShoppingCartItem } from '@/components/cart/ShoppingCartItem';
import { CartSummary } from '@/components/templates/CartSummary';
import s from './page.module.sass';

export default function CartPage() {
    const cartItems = useAppSelector(selectCartItems);
    const totalCartPcs = useAppSelector(totalCartItemsSelector);
    const totalPrice = useAppSelector(TotalPriceSelector);
    const totalCartItems = Object.keys(cartItems).length;

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('payment...', totalPrice);
    }

    return (
        <main>
            <section className={s.cartContainer}>
                <section className={s.items}>
                    <StyledCartTitle>
                        <span>Корзина</span>
                        {
                            totalCartPcs === 0
                                ? ' пустая'
                                : ' ' + totalCartItems + ' товаров'
                        }
                    </StyledCartTitle>

                    <StyledItemsContainer>
                        {Object.values(cartItems).map((item) => (
                            <div key={item.product.id}>
                                <ShoppingCartItem item={item} />
                            </div>
                        ))}
                    </StyledItemsContainer>
                </section>

                <CartSummary onSubmit={handlerSubmit}>
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
            </section>
        </main>
    );
};


const StyledCartTitle = styled.p`
    font-size: 1.8rem;
    color: gray;
    padding: 1rem 0;
`;

const StyledItemsContainer = styled.div`
    display: flex;
    flex-flow: column;
    gap: 4px;
    background: #13698b0a;
    padding: 4px;
    border-radius: 18px;
`;
