'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
// import { Slug } from './data';
import s from './Breadcrumbs.module.sass';

export function Breadcrumbs() {
    const pathname = usePathname();
    const params = useParams();

    let linkPath = `/catalog`;
    const path = pathname.split('/').slice(2);
    const last = path.length - 1;

    console.log('path...', pathname, path, params);

    return (
        <div className={s.main}>

            <div className={s.item}>
                <Link href="/">
                    <img src="/icons/svg/home.svg" alt="home" className={s.home} />
                </Link>
            </div>

            { path.length !== 0 &&
                path.map((link, index) => {
                    linkPath = linkPath + `/${link}`;
                    return (
                        <div className={s.item} key={link}>
                            <span className={s.gt}>&gt;</span>
                            { index !== last
                                ? <Link href={linkPath} className={s.link}>{decodeURI(link)}</Link>
                                : <span>{decodeURI(link)}</span>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}
