import React from 'react';
import styled from 'styled-components';
import { Product } from '@/data/types';
import { ProductProvider } from './useProductContext';

function ProductShortCard(
    { children, slug, tag, product }:
    {
        children: React.ReactNode,
        slug: string,
        tag: string,
        product: Product
    }
) {
    return (
        <ProductProvider value={{ slug, tag, product }}>
            <StyledCounter>
                {children}
            </StyledCounter>
        </ProductProvider>
    )
}

const StyledCounter = styled.div`
    display: inline-flex;
    border: 1px solid #17a2b8;
    line-height: 1.5;
    border-radius: 0.25rem;
    overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { ProductShortCard };
