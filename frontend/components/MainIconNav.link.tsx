'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './MainIconNav.module.sass';

type Nav = {
    label: string,
    icon: React.ReactNode,
    href: string
}
type Props = {
    navLinks: Nav[]
}

export function IconNavLink({ navLinks }: Props) {
    const path = usePathname();

    return (
        <>
            {
                navLinks.map(link => {
                    const isActive = path === link.href;

                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`${s.link} ${isActive ? s.active : ''}`}
                        >
                                {link.icon}
                        </Link>
                    )
                })
            }
        </>
    )
}
