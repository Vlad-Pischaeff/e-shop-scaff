import { Search } from './Search';
import { MainIconNavContainer } from './MainIconNav.container';
import { MainNavContainer } from './MainNav.container';
import s from './MainHeader.module.sass';

export function MainHeader() {

    return (
        <header className={s.header}>
            <MainNavContainer />
            <Search />
            <MainIconNavContainer />
        </header>
    )
}
