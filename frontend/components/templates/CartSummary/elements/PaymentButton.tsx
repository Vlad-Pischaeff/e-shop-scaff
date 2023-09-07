import React from 'react';
import styled from 'styled-components';

export function PaymentButton(
    { active }:
    { active: boolean }
) {
    return (
        <SButton $active={active} disabled={!active} type="submit">
            Payment
        </SButton>
    )
}

const SButton = styled.button<{ $active?: boolean; }>`
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 1.5rem;
    border: none;
    width: 100%;
    background: ${props => props.$active ? 'white' : '#eee'};
    color: ${props => props.$active ? 'black' : 'darkgray'};
    ${props => props.$active && `
        &:hover {
            cursor: pointer;
            color: white;
            background: orangered;
        }
    `}
`;
