import React from 'react';
import styled from 'styled-components';
import { Product } from '@/data/types';
import { ProductProvider } from './useProductContext';
import { ItemImage, Cost, Price, NameFull, NameShort } from './elements';

function ProductShortCard(
    { children, product }:
    {
        children: React.ReactNode,
        product: Product
    }
) {
    return (
        <ProductProvider value={{ product }}>
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

ProductShortCard.ItemImage = ItemImage;
ProductShortCard.Cost = Cost;
ProductShortCard.Price = Price;
ProductShortCard.NameFull = NameFull;
ProductShortCard.NameShort = NameShort;

export { ProductShortCard };
