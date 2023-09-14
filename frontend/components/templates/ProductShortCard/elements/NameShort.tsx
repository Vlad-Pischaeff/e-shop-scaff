/** not used */
import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../useProductContext';

export function NameShort() {
    const item = useProductContext();

    return (
        <SName>
            {item.product.shortname}
        </SName>
    )
}

const SName = styled.p`
    color: #333;
    font-size: 1.5rem;
`;
