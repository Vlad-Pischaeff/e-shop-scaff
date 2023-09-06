import styled from 'styled-components';
import { ProductShortCard } from '@/components/ProductShortCard';
import { CartItem } from '@/data/types';

export function ShoppingCartItem(
    { item }:
    { item: CartItem }
) {

    return (
        <ProductShortCard item={item}>
            <ProductShortCard.ItemImage />

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
