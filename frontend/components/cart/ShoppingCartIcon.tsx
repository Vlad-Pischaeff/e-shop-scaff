'use client';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { totalCartItemsSelector } from "@/store/slices/cartSlice";
import { useAppSelector } from "@/store/store";
import s from './ShoppingCartIcon.module.sass';

export default function ShoppingCartIcon() {
    const totalItems = useAppSelector(totalCartItemsSelector);

    return (
        <div className={s.container}>
            <ShoppingCartOutlinedIcon />
            { !!totalItems &&
                <div className={s.value}>
                    {totalItems}
                </div>
            }
        </div>
    )
}
