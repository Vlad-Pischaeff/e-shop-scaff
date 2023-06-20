import Link from 'next/link';
import s from './page.module.sass';

const navItems = [
    { label: 'Computers' },
    { label: 'Notebooks' },
    { label: 'Monitors' },
    { label: 'Storages' },
    { label: 'UPs' },
    { label: 'Printers' },
    { label: 'Accesories' },
];

export default function Home() {
    return (
        <main className={s.main}>
            <div className={s.layout}>
                <aside className={s.leftmenu}>
                    <ul>
                        {
                            navItems.map(item => {
                                return (
                                    <div key={item.label}>
                                        <Link href={`/catalog/${item.label}`}>
                                            <li>{item.label}</li>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </aside>
                <div className={s.center}>
                    <img src='/images/frontpage.webp' alt='frontpage' />
                </div>
            </div>
        </main>
    )
}
