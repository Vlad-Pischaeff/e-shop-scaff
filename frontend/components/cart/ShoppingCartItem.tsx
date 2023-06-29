import Image from 'next/image';
import { ShoppingCartQty } from './ShoppingCartQty';
import { CartItem } from '@/data/types';
import s from './cart.module.sass';

type Props = {
    item: CartItem
}

export function ShoppingCartItem({ item }: Props) {

    return (
        <div className={s.itemContainer}>
            <picture className={s.itemImage}>
                <Image
                    src={item.product.image}
                    width={128}
                    height={100}
                    alt={item.product.shortname}
                />
            </picture>

            <div className={s.itemName}>
                <p className={s.itemNameShort}>
                    {item.product.shortname}
                </p>
                <p className={s.itemNameFull}>
                    {item.product.fullname}
                </p>
            </div>

            <div className={s.itemQtyWrap}>
                <p className={s.itemCost}>
                    {item.product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                </p>

                <ShoppingCartQty item={item} />
            </div>
            <p className={s.itemSumm}>
                {
                    (item.qty * item.product.price)
                        .toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
                }
            </p>
        </div>
    );
};
