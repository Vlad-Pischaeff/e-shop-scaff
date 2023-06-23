import Link from 'next/link';
import s from './page.module.sass';

type Props = {
    slug: string,
    nav: any[]
}

export function Navigation(props: Props) {
    const { slug, nav } = props;

    return (
        <aside className={s.leftmenu}>
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
