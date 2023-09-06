import React from 'react';
import styled from 'styled-components';

export function NameShort(
    { name }:
    { name: string }
) {
    return (
        <StyledName>
            {name}
        </StyledName>
    )
}

const StyledName = styled.p`
    color: #333;
    font-size: 1.5rem;
`;
