'use client';

import { decrement, increment, removeItem } from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/store/store';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartItem } from '@/data/types';
import s from './cart.module.sass';

type Props = {
    item: CartItem
}

export function ShoppingCartQty({ item }: Props) {
    const dispatch = useAppDispatch();

    return (
        <div className={s.itemQty}>
            {item.qty === 1
                ? (<DeleteOutlineIcon
                        className={s.itemBtn}
                        onClick={() => dispatch(removeItem(item.product.id))} />)
                : (<RemoveCircleOutlineIcon
                        className={s.itemBtn}
                        onClick={() => dispatch(decrement(item.product))} />)
            }
            <p>{item.qty}</p>
            <AddCircleOutlineIcon
                className={s.itemBtn}
                onClick={() => dispatch(increment(item.product))}
            />
        </div>
    );
};
