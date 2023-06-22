import Link from 'next/link';
import s from './page.module.sass';

export function Navigation(
    { slug, nav }:
    { slug: string, nav: any[] }
) {

    const { menubgcolor } = nav[0];

    return (
        <aside
            className={s.leftmenu}
            style={{ 'background': menubgcolor }}
        >
            <ul>
                {
                    nav[0].submenu.map((item: any) => {
                        return (
                            <div key={item.id}>
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
