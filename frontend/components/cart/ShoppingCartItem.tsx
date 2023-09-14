import React from 'react';
import styled from 'styled-components';
import { AppDispatch } from '@/store/store';
import { ProductShortCard } from '@/components/templates/ProductShortCard';
import { CartItem } from '@/data/types';

export const ShoppingCartItem = React.memo(function (
    { item, action }:
    {
        item: CartItem,
        action: AppDispatch
    }
) {

    return (
        <ProductShortCard item={item} action={action}>

            <SImgWrap>
                <ProductShortCard.ItemImage
                    width={180}
                    height={120}
                />
            </SImgWrap>

            <SDescWrap>
                <ProductShortCard.NameShort>
                    {item.product.shortname}
                </ProductShortCard.NameShort>

                <ProductShortCard.NameFull>
                    {item.product.fullname}
                </ProductShortCard.NameFull>
            </SDescWrap>

            <SQtyWrap>
                <ProductShortCard.Price>
                    {item.product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                </ProductShortCard.Price>

                <ProductShortCard.Qty />
            </SQtyWrap>

            <ProductShortCard.Cost>
                {
                    (item.qty * item.product.price)
                        .toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
                }
            </ProductShortCard.Cost>

        </ProductShortCard>
    );
}, (prev, next) => {
    return (prev.item.qty === next.item.qty)
        ? true
        : false;
})

const SImgWrap = styled.div`
    flex: 1 0 auto;
    width: 80px;
`;

const SDescWrap = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-flow: column;
    gap: 8px;
`;

const SQtyWrap = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-self: stretch;
    padding: 0 8px;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
`;
