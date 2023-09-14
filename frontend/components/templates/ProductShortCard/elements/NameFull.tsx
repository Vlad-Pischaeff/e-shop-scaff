/** not used */
import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../useProductContext';

export function NameFull() {
    const item = useProductContext();

    return (
        <SName>
            {item.product.fullname}
        </SName>
    )
}

const SName = styled.p`
    color: gray;
`;
