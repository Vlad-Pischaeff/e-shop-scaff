import styled from 'styled-components';
import { AppDispatch } from '@/store/store';
import { ProductShortCard } from '@/components/templates/ProductShortCard';
import { CartItem } from '@/data/types';

export function ShoppingCartItem(
    { item, action }:
    {
        item: CartItem,
        action: AppDispatch
    }
) {

    return (
        <ProductShortCard item={item} action={action}>

            <ImgWrap>
                <ProductShortCard.ItemImage width={180} height={120} />
            </ImgWrap>

            <DescWrap>
                <ProductShortCard.NameShort />
                <ProductShortCard.NameFull />
            </DescWrap>

            <QtyWrap>
                <ProductShortCard.Price />
                <ProductShortCard.Qty />
            </QtyWrap>

            <ProductShortCard.Cost />

        </ProductShortCard>
    );
};

const ImgWrap = styled.div`
    flex: 1 0 auto;
    width: 80px;
`;

const DescWrap = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-flow: column;
    gap: 8px;
`;

const QtyWrap = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-self: stretch;
    padding: 0 8px;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
`;
