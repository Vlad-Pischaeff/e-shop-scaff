'use client';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { totalCartItemsSelector } from "@/store/slices/cartSliceObj";
import { useAppSelector } from "@/store/store";
import s from './ShoppingCartIcon.module.sass';

export function ShoppingCartIcon() {
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
