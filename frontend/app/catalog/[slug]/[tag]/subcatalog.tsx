import Link from 'next/link';
import s from './page.module.sass';

export function SubCatalogItem(
    { props }:
    { props: any }
) {
    const { slug, tag, product } = props;

    return (
        <div key={product.id} className={s.product}>
            <Link href={`/catalog/${slug}/${tag}/${product.shortname}`} className={s.productImgLink}>
                <picture className={s.productImgLink_image}>
                    <img src={product.image} alt={product.shortname} />
                </picture>
                <div className={s.productImgLink_id}>
                    # {product.id}
                </div>
            </Link>
            <div className={s.description}>
                {product.fullname}
            </div>
            <div className={s.price}>
                <span>{product.price} Р</span>
            </div>
        </div>
    )
}