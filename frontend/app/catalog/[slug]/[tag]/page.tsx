import { Metadata } from "next";
import { SubCatalogItem } from './subcatalog';
import s from './page.module.sass';

async function getProducts(slug: string, tag: string) {
    const response = await fetch(`http://localhost:3001/products?catId=${slug}&subCatId=${tag}`,
        { next: { revalidate: 10 } }
    );

    if (!response.ok) throw new Error('unable to fetch products...');

    return response.json();
}

export async function generateStaticParams(props: any) {
    const sections = await fetch(`http://localhost:3001/sections`).then((res) => res.json())

    const params = sections.map((section: any) => ({
        tag: section.label,
    }));

    console.log('✔️ generateStaticParams..[tag]', params, props);

    return params;
}

// export async function getStaticProps(props: Props) {
//     const { slug, tag } = props.params;
//     const products = await getProducts(slug, tag);
//     console.log('getStaticProps..', products);
//     return {
//         props: {
//             products,
//             slug,
//             tag
//         }
//     }
// }

export async function generateMetadata(
    { params }:
    { params: { tag: string, slug: string }}
): Promise<Metadata> {
    const { slug, tag } = params;

    return {
        title: `shop | ${slug} | ${decodeURI(tag)}`
    }
}

type Props = {
    params: {
        tag: string,
        slug: string
    }
}

// export default async function SubCatalog(props: Props) {
export default async function SubCatalog(props: any) {
    const { slug, tag } = props.params;
    const products = await getProducts(slug, tag);
    // const { products, slug, tag } = props;
    console.log('✅ subCatalog > slug...', props.params, props)
    // console.log('page > Catalog > subCatalog > props...', props)
    return (
        <main className={s.main}>

            <h2>{decodeURIComponent(tag)} {products.length} товаров</h2>

            <article className={s.layout}>

                <aside className={s.leftmenu}>
                    filter
                </aside>
                <section className={s.catalog}>
                    { products.length !== 0 &&
                        products.map((product: any) => <SubCatalogItem props={{ slug, tag, product }} />)
                    }
                </section>

            </article>
        </main>
    )
}
