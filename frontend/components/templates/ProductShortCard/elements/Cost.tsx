import React from 'react';
import styled from 'styled-components';

export function Cost({children}: {children: React.ReactNode}) {
    return (
        <SDiv>
            {children}
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
