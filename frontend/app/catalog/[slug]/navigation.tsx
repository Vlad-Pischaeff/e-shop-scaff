import Link from 'next/link';
import { Slug, navItems } from '@/data/data';
import s from './page.module.sass';

export function Navigation(
    { slug }:
    { slug: Slug }
) {

    const { menubgcolor } = navItems[slug];

    return (
        <aside
            className={s.leftmenu}
            style={{ 'background': menubgcolor }}
        >
            <ul>
                {
                    navItems[slug].submenu.map(item => {
                        return (
                            <div key={item.label}>
                                <Link href={`/catalog/${slug}/${item.label}`}>
                                    <li>{item.label}</li>
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </aside>
    )
}
