import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useProductContext } from '../useProductContext';

export function ItemImage() {
    const item = useProductContext();

    return (
        <StyledImage>
            <Image
                src={item.product.image}
                width={128}
                height={100}
                alt={item.product.shortname}
            />
        </StyledImage>
    )
}

const StyledImage = styled.picture`
    display: block;
    width: 80px;
    & > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;
