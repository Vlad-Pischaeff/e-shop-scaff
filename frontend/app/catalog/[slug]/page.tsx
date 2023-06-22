import Image from 'next/image';
import { Metadata } from "next";
import { Navigation } from './navigation';
import s from './page.module.sass';

async function getSubSection(slug: string) {
    const response = await fetch(`http://localhost:3001/sections?title=${slug}`,
        { cache: 'no-store' }
    );
    return response.json();
}

export async function generateMetadata(
    { params }:
    { params: { slug: string }}
): Promise<Metadata> {
    const { slug } = params;

    return {
        title: `shop | ${slug}`
    }
}

export default async function Catalog(
    { params }:
    { params: { slug: string }}
) {
    const { slug } = params;
    const nav = await getSubSection(slug);
    const { bgcolor } = nav[0];

    console.log('page > Catalog > slug...', slug, params)

    return (
        <main className={s.main}>

            <div className={s.layout}>

                <Navigation slug={slug} nav={nav} />
                <div
                    className={s.center}
                    style={{ 'background': bgcolor }}
                >
                    <Image src={`/images/${slug}.jpg`} width={800} height={600} alt='frontpage' />
                </div>

            </div>
        </main>
    )
}
