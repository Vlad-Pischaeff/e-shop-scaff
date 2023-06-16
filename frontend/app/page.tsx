import s from './page.module.sass';

export default function Home() {
    return (
        <main>
            {/* <h2>Main page</h2> */}
            <div className={s.layout}>
                <aside className={s.leftmenu}>
                    <ul>
                        <li>Computers</li>
                        <li>Notebooks</li>
                        <li>Monitors</li>
                        <li>Storages</li>
                        <li>UPs</li>
                        <li>Printers</li>
                        <li>Accesories</li>
                    </ul>
                </aside>
                <div className={s.center}>
                    <img src='./frontpage2.png' alt='frontpage' />
                </div>
            </div>
        </main>
    )
}
