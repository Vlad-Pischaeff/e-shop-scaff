"use client";

import { TotalPriceSelector, selectCartItems, totalCartItemsSelector } from '@/store/slices/selectors';
import { useAppSelector } from '@/store/store';
import { ShoppingCartItem } from '@/components/cart/ShoppingCartItem';
import s from './page.module.sass';

export default function CartPage() {
    const cartItems = useAppSelector(selectCartItems);
    const totalCartItems = useAppSelector(totalCartItemsSelector);
    const totalPrice = useAppSelector(TotalPriceSelector);

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('payment...');
    }

    return (
        <main>
            <form onSubmit={handlerSubmit} className={s.cartContainer}>
                <section className={s.items}>
                    <p className={s.title}>
                        <span>Корзина</span>
                        {
                            Object.keys(cartItems).length === 0
                                ? ' пустая'
                                : ' ' + totalCartItems + ' товаров'
                        }
                    </p>

                    <div className={s.cartItemsContainer}>
                        {Object.values(cartItems).map((item) => (
                            <div key={item.product.id}>
                                <ShoppingCartItem item={item} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className={s.amount}>
                    <div className={s.total}>
                        <div className={s.totalPrice}>
                            <span className={s.totalPriceTitle}>
                                Total:
                            </span>
                            <span className={s.totalPriceAmount}>
                                {totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                            </span>
                        </div>
                        <div className={s.totalPrice}>
                            <span className={s.totalPriceTitle}>
                                Items:
                            </span>
                            <span className={s.totalPriceAmount}>
                                {Object.keys(cartItems).length}
                            </span>
                        </div>
                        <div className={s.totalPrice}>
                            <span className={s.totalPriceTitle}>
                                Pcs:
                            </span>
                            <span className={s.totalPriceAmount}>
                                {totalCartItems}
                            </span>
                        </div>
                        <button className={`${s.payment} ${totalPrice !== 0 ? s.paymentOn : s.paymentOff}`} type="submit">
                            Payment
                        </button>
                    </div>
                </section>
            </form>
        </main>
    );
};
