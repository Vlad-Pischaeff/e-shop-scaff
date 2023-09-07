import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../useProductContext';

export function Price() {
    const item = useProductContext();

    return (
        <SPrice>
            { item.product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }) }
        </SPrice>
    )
}

const SPrice = styled.p`
    font-size: 1.2rem;
    color: #888;
`;
