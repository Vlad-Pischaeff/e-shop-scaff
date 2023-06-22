import { Metadata } from "next";
import { Slug } from '@/data/data';
import s from './page.module.sass';

export async function generateMetadata(
    { params }:
    { params: { tag: string, slug: string }}
): Promise<Metadata> {
    const { slug, tag } = params;

    return {
        title: `shop | ${slug} | ${decodeURI(tag)}`
    }
}

export default async function SubCatalog(
    { params }:
    { params: { tag: string, slug: string }}
) {
    // const { slug } = params;
    // const { bgcolor } = navItems[slug];
    console.log('page > Catalog > subCatalog > slug...', params)

    return (
        <main className={s.main}>

            <article className={s.layout}>

                <aside className={s.leftmenu}>
                    filter
                </aside>
                <section className={s.center}>
                    sub component
                </section>

            </article>
        </main>
    )
}
