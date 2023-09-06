import React from 'react';
import styled from 'styled-components';

export function TotalValue(
    { children, title }:
    {
        children: React.ReactNode,
        title: string
    }
) {

    return (
        <StyledTotal>
            <StyledTitle>{title}</StyledTitle>
            <StyledAmount>{children}</StyledAmount>
        </StyledTotal>
    )
}

const StyledTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
`;

const StyledTitle = styled.span`
    color: white;
`;

const StyledAmount = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`;
