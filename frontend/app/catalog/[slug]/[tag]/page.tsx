import { Metadata } from "next";
import s from './page.module.sass';

async function getProducts(slug: string, tag: string) {
    const response = await fetch(`http://localhost:3001/products?cat=${slug}&subcat=${tag}`,
        { next: { revalidate: 10 } }
    );
    console.log('slug > tag..', slug, tag)
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
    // const { slug } = params;
    const { slug, tag } = params;
    const products = await getProducts(slug, tag);
    console.log('page > Catalog > subCatalog > slug...', params, products)

    return (
        <main className={s.main}>

            <article className={s.layout}>

                <aside className={s.leftmenu}>
                    filter
                </aside>
                <section className={s.catalog}>
                    { products.length !== 0 &&
                        products.map((product: any) => {
                            return (
                                <div key={product.id} className={s.product}>
                                    {product.name}
                                </div>
                            )
                        })
                    }
                </section>

            </article>
        </main>
    )
}
