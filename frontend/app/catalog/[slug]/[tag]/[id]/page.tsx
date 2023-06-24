import s from './page.module.sass';

// export async function generateStaticParams(
//     { params: { slug, tag } }:
//     { params: { slug: string, tag: string } }
// ) {
//     const products = await fetch(`http://localhost:3001/products`).then((res) => res.json())

//     const params = products.map((product: any) => ({
//         id: product.id
//     }));
//     console.log('✔️ generateStaticParams2..', params, products, slug, tag );
//     return params;
// }

type Props = {
    params: {
        id: string
    }
}

export default function Product(props: Props) {
    const { id } = props.params;

    return (
        <main className={s.main}>
            <div>
                <h2>product {decodeURIComponent(id)} page</h2>
            </div>
        </main>
    )
}
