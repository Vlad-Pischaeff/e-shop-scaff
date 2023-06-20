'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './Breadcrumbs.module.sass';

export function Breadcrumbs() {
    const pathname = usePathname();

    console.log('path...', pathname);

    return (
        <div className={s.main}>
            <div className={s.image}>
                <Link href="/">
                    <img src="/icons/svg/home.svg" alt="home" className={s.home} />
                </Link>
            </div>

            <span>\</span>
            <Link href="/catalog/computers">Computers</Link>
        </div>
    )
}
