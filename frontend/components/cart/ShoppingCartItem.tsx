import { ProductShortCard } from '@/components/ProductShortCard';
import { ShoppingCartQty } from './ShoppingCartQty';
import { CartItem } from '@/data/types';
import s from './cart.module.sass';

export function ShoppingCartItem(
    { item }:
    { item: CartItem }
) {

    return (
        <ProductShortCard product={item.product}>
            <ProductShortCard.ItemImage image={item.product.image} alt={item.product.shortname} />

            <div className={s.itemName}>
                <ProductShortCard.NameShort name={item.product.shortname} />
                <ProductShortCard.NameFull name={item.product.fullname} />
            </div>

            <div className={s.itemQtyWrap}>
                <ProductShortCard.Price price={item.product.price} />
                <ShoppingCartQty item={item} />
            </div>
            <ProductShortCard.Cost cost={(item.qty * item.product.price)} />
        </ProductShortCard>
    );
};
