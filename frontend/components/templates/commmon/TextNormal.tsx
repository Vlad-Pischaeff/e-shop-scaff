import React from 'react';
import styled from 'styled-components';

export const TextNormal = React.memo(function ({children}: {children: React.ReactNode}) {
    return (
        <Sp>
            {children}
        </Sp>
    )
})

const Sp = styled.p`
    color: gray;
`;
