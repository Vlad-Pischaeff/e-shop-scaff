'use client';

import { ShoppingCartIcon } from '@/components/cart/ShoppingCartIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconNavLink } from './MainIconNav.link';
import s from './MainIconNav.module.sass';

const navItems = [
    { label: 'Favorites', href: "/favorite", icon: <FavoriteBorderIcon /> },
    { label: 'Profile', href: "/profile", icon: <PersonOutlineOutlinedIcon /> },
];

export function MainIconNavContainer() {
    return (
        <div className={s.container}>
            <IconNavLink navLinks={navItems} />
            <ShoppingCartIcon />
        </div>
    )
}
