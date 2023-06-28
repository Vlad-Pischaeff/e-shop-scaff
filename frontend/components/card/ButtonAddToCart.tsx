'use client';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { increment } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store/store";
import s from './ButtonAddToCart.module.sass';

export function ButtonAddToCart(
    { product }:
    { product: any }
) {
    const dispatch = useAppDispatch();

    return (
        <div
            className={s.wrap}
            onClick={() => dispatch(increment(product))}
        >
            <AddShoppingCartIcon />
        </div>
    )
}
