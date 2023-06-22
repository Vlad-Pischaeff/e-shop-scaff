import s from './page.module.sass';

export function Product(
    { product }:
    { product: any }
) {
    return (
        <div key={product.id} className={s.product}>
            <picture className={s.picture}>
                <source srcSet={product.image} type="image/webp" />
                <img src={product.image} alt={product.name} />
            </picture>
            <div className={s.description}>
                {product.name}
            </div>
            <div className={s.price}>
                <span>{product.price} Р</span>
            </div>
        </div>
    )
}
