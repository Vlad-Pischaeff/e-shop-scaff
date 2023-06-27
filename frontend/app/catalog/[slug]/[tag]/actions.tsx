'use client';

import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { increment } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store/store";
import s from './actions.module.sass';

const navItems = [
    { label: 'Compare', icon: <BarChartIcon /> },
    { label: 'Favorites', icon: <FavoriteBorderIcon /> },
    { label: 'Cart', icon: <AddShoppingCartIcon /> },
];

export default function Actions(
    { product }:
    { product: any }
) {
    const dispatch = useAppDispatch();
    const items = {
        'Compare': () => console.log('Compare...'),
        'Favorites': () => console.log('Favorites...'),
        'Cart': () => dispatch(increment(product))
    } as const;
    type Actions = keyof typeof items;

    const handlerClick = (label: Actions) => () => {
        items[label]();
    }

    return (
        <nav className={s.container}>
            {
                navItems.map(link => {
                    return (
                        <div
                            className={s.wrap}
                            key={link.label}
                            onClick={handlerClick(link.label as Actions)}
                        >
                            {link.icon}
                        </div>
                    )
                })
            }
        </nav>
    )
}
