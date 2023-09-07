import React from 'react';
import styled from 'styled-components';
import { CartItem } from '@/data/types';
import { AppDispatch } from '@/store/store';
import { ProductProvider } from './useProductContext';
import { ItemImage, Cost, Price, NameFull, NameShort, Qty } from './elements';

function ProductShortCard(
    { children, item, action }:
    {
        children: React.ReactNode,
        item: CartItem,
        action: AppDispatch
    }
) {

    return (
        <ProductProvider value={item} action={action}>
            <StyledCard>
                {children}
            </StyledCard>
        </ProductProvider>
    )
}

const StyledCard = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 12px 16px;
    border-radius: 16px;
    background: #ffffffb4;
`;

ProductShortCard.Qty = Qty;
ProductShortCard.Cost = Cost;
ProductShortCard.Price = Price;
ProductShortCard.NameFull = NameFull;
ProductShortCard.NameShort = NameShort;
ProductShortCard.ItemImage = ItemImage;

export { ProductShortCard };
