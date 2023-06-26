'use client';

import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import s from './actions.module.sass';

const navItems = [
    { label: 'Compare', icon: <BarChartIcon /> },
    { label: 'Favorites', icon: <FavoriteBorderIcon /> },
    { label: 'Cart', icon: <AddShoppingCartIcon /> },
];

export default function Actions() {

    return (
        <nav className={s.container}>
            {
                navItems.map(link => {
                    return (
                        <div className={s.wrap} key={link.label}>
                            {link.icon}
                        </div>
                    )
                })
            }
        </nav>
    )
}
