import { NavLink } from './MainNav.link';
import s from './MainNav.module.sass';

const navItems1 = [
    { label: 'Store', href: "/" },
    { label: 'Delivery', href: "/delivery" },
    { label: 'Payment', href: "/payment" },
    { label: 'Contacts', href: "/contacts" }
];

export function MainNavContainer() {
    return (
        <div className={s.container}>
            <NavLink navLinks={navItems1} />
        </div>
    )
}
