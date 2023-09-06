import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useProductContext } from '../useProductContext';

export function ItemImage(
    { width, height }:
    { width: number, height: number }
) {
    const item = useProductContext();

    return (
        <StyledImage>
            <Image
                src={item.product.image}
                width={width}
                height={height}
                alt={item.product.shortname}
            />
        </StyledImage>
    )
}

const StyledImage = styled.picture`
    display: block;
    & > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;
