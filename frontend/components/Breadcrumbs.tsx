'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
// import { Slug } from './data';
import s from './Breadcrumbs.module.sass';

export function Breadcrumbs() {
    const pathname = usePathname();
    const params = useParams();
    // const link = 'Computers';
    let linkPath = `/catalog`;
    const path = pathname.split('/').slice(2);

    console.log('path...', pathname, path, params);

    return (
        <div className={s.main}>
            <div className={s.image}>
                <Link href="/">
                    <img src="/icons/svg/home.svg" alt="home" className={s.home} />
                </Link>
            </div>
            { path.length !== 0 &&
                path.map(link => {
                    linkPath = linkPath + `/${link}`;
                    return (
                        <div className={s.image} key={link}>
                            <span className={s.gt}>&gt;</span>
                            <Link href={linkPath} className={s.link}>{decodeURI(link)}</Link>
                        </div>
                    )
                })
            }
            {/* <span>&gt;</span>
            <Link href={`/catalog/${link}`}>Computers</Link> */}
        </div>
    )
}
