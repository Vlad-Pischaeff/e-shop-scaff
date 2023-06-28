import Link from 'next/link';
import Image from 'next/image';
import Actions from './actions';
import s from './page.module.sass';

export function SubCatalogItem(
    { props }:
    { props: any }
) {
    const { slug, tag, product } = props;

    return (
        <>
            <div className={s.productWrap}>
                <Link href={`/catalog/${slug}/${tag}/${product.shortname}`}>
                    <picture className={s.productImg}>
                        <Image src={product.image} alt={product.shortname} width={128} height={100} />
                    </picture>
                </Link>
                <Link href={`/catalog/${slug}/${tag}/${product.shortname}`}>
                    <div className={s.productDesc}>
                        {product.fullname}
                    </div>
                </Link>
                <div className={s.productPrice}>
                    <span>{product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</span>
                </div>
            </div>
            <div className={s.productActions}>
                <div className={s.productId}>
                    # {product.id}
                </div>
                <Actions product={product} />
            </div>
        </>

    )
}
