import React from 'react';
import styled from 'styled-components';

export const TotalValue = React.memo(function (
    { children, title }:
    {
        children: React.ReactNode,
        title: string
    }
) {

    return (
        <STotal>
            <STitle>{title}</STitle>
            <SAmount>{children}</SAmount>
        </STotal>
    )
})

const STotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
`;

const STitle = styled.span`
    color: white;
`;

const SAmount = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`;
