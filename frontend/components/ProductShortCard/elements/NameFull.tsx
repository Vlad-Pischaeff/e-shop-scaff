import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../useProductContext';

export function NameFull() {
    const item = useProductContext();

    return (
        <StyledName>
            {item.product.fullname}
        </StyledName>
    )
}

const StyledName = styled.p`
    color: gray;
`;
