import { Metadata } from "next";
import { Product } from './product';
import s from './page.module.sass';

async function getProducts(slug: string, tag: string) {
    const response = await fetch(`http://localhost:3001/products?catId=${slug}&subCatId=${tag}`,
        { next: { revalidate: 10 } }
    );

    if (!response.ok) throw new Error('unable to fetch products...');

    return response.json();
}

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

    const { slug, tag } = params;
    const products = await getProducts(slug, tag);

    console.log('page > Catalog > subCatalog > slug...', params, products)

    return (
        <main className={s.main}>

            <h2>{decodeURI(tag)} {products.length} товаров</h2>

            <article className={s.layout}>

                <aside className={s.leftmenu}>
                    filter
                </aside>
                <section className={s.catalog}>
                    { products.length !== 0 &&
                        products.map((product: any) => <Product product={product} />)
                    }
                </section>

            </article>
        </main>
    )
}
