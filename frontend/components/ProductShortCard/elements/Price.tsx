import React from 'react';
import styled from 'styled-components';

export function Price(
    { price }:
    { price: number }
) {
    return (
        <StyledPrice>
            { price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }) }
        </StyledPrice>
    )
}

const StyledPrice = styled.p`
    font-size: 1.2rem;
    color: #888;
`;
