'use client';

import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { totalCartItemsSelector } from "@/store/slices/cartSlice";
import { useAppSelector } from "@/store/store";
import s from './cart.module.sass';

export function ShoppingCartIcon() {
    const totalItems = useAppSelector(totalCartItemsSelector);

    return (
        <div className={`${s.container} ${!!totalItems ? s.s64 : s.s40}`}>
            <Link
                href={'/cart'}
                className={s.link}
            >
                <ShoppingCartOutlinedIcon />
            </Link>
            { !!totalItems &&
                <div className={s.value}>
                    {totalItems}
                </div>
            }
        </div>
    )
}
