import React from 'react';
import styled from 'styled-components';

export function Cost(
    { cost }:
    { cost: number }
) {
    return (
        <StyledCost>
            { cost.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }) }
        </StyledCost>
    )
}

const StyledCost = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-self: stretch;
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
`;
