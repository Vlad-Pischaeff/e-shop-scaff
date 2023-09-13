"use client";

import styled from 'styled-components';
import { selectCartItems, totalCartItemsSelector } from '@/store/slices/selectors';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { ShoppingCartItem, ShoppingCartSumm } from '@/components/cart';

export default function CartPage() {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCartItems);
    const totalCartPcs = useAppSelector(totalCartItemsSelector);
    const totalCartItems = Object.keys(cartItems).length;

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('payment...', cartItems);
    }

    return (
        <main>
            <SContainer>
                <SItemsContainer>
                    <SCartTitle>
                        <span>Корзина</span>
                        {
                            totalCartPcs === 0
                                ? ' пустая'
                                : ' ' + totalCartItems + ' товаров'
                        }
                    </SCartTitle>

                    <SCartItems>
                        {Object.values(cartItems).map((item) => (
                            <div key={item.product.id}>
                                <ShoppingCartItem item={item} action={dispatch} />
                            </div>
                        ))}
                    </SCartItems>
                </SItemsContainer>

                <ShoppingCartSumm onSubmit={handlerSubmit} />

            </SContainer>
        </main>
    );
};

const SContainer = styled.section`
    flex: 1 1 auto;
    padding: 16px;
    display: flex;
    gap: 8px;

    @media (min-width: 1200px) {
        width: 1180px;
        margin: auto;
        box-shadow: 0px 1px 49px 0px rgba(51, 100, 139, 0.2);
    }
`;

const SItemsContainer = styled.div`
    flex: 1 1 auto;
`;

const SCartTitle = styled.p`
    font-size: 1.8rem;
    color: gray;
    padding: 1rem 0;
`;

const SCartItems = styled.div`
    display: flex;
    flex-flow: column;
    gap: 4px;
    background: #13698b0a;
    padding: 4px;
    border-radius: 18px;
`;
