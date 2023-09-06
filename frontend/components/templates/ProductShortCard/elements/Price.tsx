import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../useProductContext';

export function Price() {
    const item = useProductContext();

    return (
        <StyledPrice>
            { item.product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }) }
        </StyledPrice>
    )
}

const StyledPrice = styled.p`
    font-size: 1.2rem;
    color: #888;
`;
