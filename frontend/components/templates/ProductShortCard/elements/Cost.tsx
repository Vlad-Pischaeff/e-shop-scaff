import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../useProductContext';

export function Cost() {
    const item = useProductContext();

    return (
        <SDiv>
            { !!item
                ? (item.qty * item.product.price).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
                : 0
            }
        </SDiv>
    )
}

const SDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-self: stretch;
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
`;
