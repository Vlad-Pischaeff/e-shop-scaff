'use client';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MainNavigator from './MainNavigator';
import MainIconNavigator from './MainIconNavigator';
import s from './MainHeader.module.sass';

const navItems1 = [
    { label: 'Store', href: "/" },
    { label: 'Delivery', href: "/delivery" },
    { label: 'Payment', href: "/payment" },
    { label: 'Contacts', href: "/contacts" }
];

const navItems2 = [
    { label: 'Profile', href: "/profile", icon: <PersonOutlineOutlinedIcon /> },
    { label: 'Cart', href: "/cart", icon: <ShoppingCartOutlinedIcon /> },
];

export function MainHeader() {
    const refInput = React.useRef<HTMLInputElement>(null);

    const SearchItem = (e: React.FormEvent) => {
        e.preventDefault();
        const search = refInput.current?.value;
        console.log('search...', search)
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <MainNavigator navLinks={navItems1} />
            </div>

            <div className={s.search_container}>
                <form className={s.form} onSubmit={SearchItem}>
                    <input
                        className={s.input}
                        type='search'
                        placeholder='search item...'
                        ref={refInput}
                    />
                    <button className={s.button} type='submit'>
                        <SearchOutlinedIcon />
                    </button>
                </form>
            </div>
            <div className={s.container}>
                <MainIconNavigator navLinks={navItems2} />
            </div>
        </header>
    )
}
