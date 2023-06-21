import { Metadata } from "next";
import { Slug } from '@/data/data';
import s from './page.module.sass';

export async function generateMetadata(
    { params }:
    { params: { tag: string, slug: Slug }}
): Promise<Metadata> {
    const { slug, tag } = params;

    return {
        title: `shop | ${slug} | ${decodeURI(tag)}`
    }
}

export default async function SubCatalog(
    { params }:
    { params: { tag: string, slug: Slug }}
) {
    // const { slug } = params;
    // const { bgcolor } = navItems[slug];
    console.log('page > Catalog > subCatalog > slug...', params)

    return (
        <main className={s.main}>

            <div className={s.layout}>

                <div className={s.leftmenu}>
                    filter
                </div>
                <div className={s.center}>
                    sub component
                </div>

            </div>
        </main>
    )
}
