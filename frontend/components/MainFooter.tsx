import s from './MainFooter.module.sass';

export function MainFooter() {
    return (
        <footer className={s.footer}>
            <div className={s.container}>pischaeff vlad &copy;</div>
            <div className={s.container}>2023</div>
        </footer>
    )
}
