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

            <SImgWrap>
                <ProductShortCard.ItemImage width={180} height={120} />
            </SImgWrap>

            <SDescWrap>
                <ProductShortCard.NameShort />
                <ProductShortCard.NameFull />
            </SDescWrap>

            <SQtyWrap>
                <ProductShortCard.Price />
                <ProductShortCard.Qty />
            </SQtyWrap>

            <ProductShortCard.Cost />

        </ProductShortCard>
    );
};

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
