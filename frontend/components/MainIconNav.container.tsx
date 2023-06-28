'use client';

import { ShoppingCartIcon } from '@/components/cart/ShoppingCartIcon';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconNavLink } from './MainIconNav.link';
import s from './MainIconNav.module.sass';

const navItems2 = [
    { label: 'Profile', href: "/profile", icon: <PersonOutlineOutlinedIcon /> },
    { label: 'Cart', href: "/cart", icon: <ShoppingCartIcon /> },
];

export function MainIconNavContainer() {
    return (
        <div className={s.container}>
            <IconNavLink navLinks={navItems2} />
        </div>
    )
}
