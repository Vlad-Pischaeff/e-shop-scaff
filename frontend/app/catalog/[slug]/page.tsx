import { Metadata } from "next";
import { Navigation } from './navigation';
import { Slug } from '@/data/data';
import s from './page.module.sass';

export async function generateMetadata(
    { params }:
    { params: { slug: Slug }}
): Promise<Metadata> {
    const { slug } = params;

    return {
        title: `shop | ${slug}`
    }
}

export default async function Catalog(
    { params }:
    { params: { slug: Slug }}
) {
    const { slug } = params;
    // const { bgcolor } = navItems[slug];
    console.log('page > Catalog > slug...', slug, params)

    return (
        <main className={s.main}>

            <div className={s.layout}>

                <Navigation slug={slug} />
                <div
                    className={s.center}
                    // style={{ 'background': bgcolor }}
                >
                    <img src={`/images/${slug}.jpg`} alt='frontpage' />
                </div>

            </div>
        </main>
    )
}
