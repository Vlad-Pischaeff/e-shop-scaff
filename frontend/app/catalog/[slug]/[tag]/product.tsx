import Link from 'next/link';
import s from './page.module.sass';

export function Product(
    { product }:
    { product: any }
) {
    return (
        <div key={product.id} className={s.product}>
            <Link href={`/product/${product.id}`} className={s.productImgLink}>
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
