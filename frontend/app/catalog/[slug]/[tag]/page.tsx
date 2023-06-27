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

export async function generateMetadata(
    { params }:
    { params: { tag: string, slug: string }}
): Promise<Metadata> {
    const { slug, tag } = params;

    return {
        title: `shop | ${slug} | ${decodeURIComponent(tag)}`
    }
}

type Props = {
    params: {
        tag: string,
        slug: string
    }
}

export default async function SubCatalog(props: Props) {
    const { slug, tag } = props.params;
    const products = await getProducts(slug, tag);

    console.log('\x1b[38;5;159;48;5;5m✅ page > [tag]...\x1b[0m', props.params, props)

    return (
        <main className={s.main}>

            <h2>{decodeURIComponent(tag)} {products.length} товаров</h2>

            <article className={s.layout}>

                <aside className={s.leftmenu}>
                    filter
                </aside>
                <section className={s.catalog}>
                    { products.length !== 0 &&
                        products.map((product: any) => {
                            return (
                                <div key={product.id} className={s.product}>
                                    <SubCatalogItem props={{ slug, tag, product }} />
                                </div>
                            )
                        })
                    }
                </section>

            </article>
        </main>
    )
}
