import React from 'react';
import styled from 'styled-components';

export const TextPrice = React.memo(function ({children}: {children: React.ReactNode}) {
    return (
        <Sp>
            {children}
        </Sp>
    )
})

const Sp = styled.p`
    font-size: 1.2rem;
    color: #888;
`;
