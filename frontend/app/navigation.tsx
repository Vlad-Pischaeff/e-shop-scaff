import Link from 'next/link';
import s from './page.module.sass';

type Props = {
    sections: any[]
}

export function Navigation(props: Props) {
    const { sections } = props;

    return (
        <aside className={s.leftmenu}>
            <ul>
                {
                    sections.map((item: any) => {
                        return (
                            <div key={item.id}>
                                <Link href={`/catalog/${item.title}`}>
                                    <li>{item.title}</li>
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </aside>
    )
}
