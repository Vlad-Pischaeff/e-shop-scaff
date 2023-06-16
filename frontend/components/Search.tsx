'use client';

import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import s from './Search.module.sass';

export function Search() {
    const refInput = React.useRef<HTMLInputElement>(null);

    const searchItem = (e: React.FormEvent) => {
        e.preventDefault();
        const search = refInput.current?.value;
        console.log('search...', search)
    }

    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={searchItem}>
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
    )
}
