import React from 'react';
import styled from 'styled-components';

export function NameFull(
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
    color: gray;
`;
