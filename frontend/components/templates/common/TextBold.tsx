import React from 'react';
import styled from 'styled-components';

export const TextBold = React.memo(function ({children}: {children: React.ReactNode}) {
    return (
        <Sp>
            {children}
        </Sp>
    )
})

const Sp = styled.p`
    color: #333;
    font-size: 1.5rem;
`;
