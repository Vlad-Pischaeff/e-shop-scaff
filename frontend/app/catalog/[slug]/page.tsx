import { Navigation } from './navigation';
import { Slug, navItems } from './data';
import s from './page.module.sass';

export default function CatalogSlug(
    { params }:
    { params: { slug: Slug }}
) {
    const { slug } = params;
    const { bgcolor } = navItems[slug];

    return (
        <main className={s.main}>
            <div className={s.layout}>

                <Navigation slug={slug} />

                <div
                    className={s.center}
                    style={{ 'background': bgcolor }}
                >
                    <img src={`/images/${slug}.jpg`} alt='frontpage' />
                </div>

            </div>
        </main>
    )
}
