'use client';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconNavLink } from './MainIconNav';
import s from './MainIconNav.module.sass';

const navItems2 = [
    { label: 'Profile', href: "/profile", icon: <PersonOutlineOutlinedIcon /> },
    { label: 'Cart', href: "/cart", icon: <ShoppingCartOutlinedIcon /> },
];

export function MainIconNavContainer() {
    return (
        <div className={s.container}>
            <IconNavLink navLinks={navItems2} />
        </div>
    )
}
