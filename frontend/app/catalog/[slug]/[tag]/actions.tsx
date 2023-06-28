'use client';

import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ButtonAddToCart } from '@/components/card/ButtonAddToCart';
import s from './actions.module.sass';

const navItems = [
    { label: 'Compare', icon: <BarChartIcon /> },
    { label: 'Favorites', icon: <FavoriteBorderIcon /> },
];

export default function Actions(
    { product }:
    { product: any }
) {

    const items = {
        'Compare': () => console.log('Compare...'),
        'Favorites': () => console.log('Favorites...'),
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
            <ButtonAddToCart product={product} />
        </nav>
    )
}
