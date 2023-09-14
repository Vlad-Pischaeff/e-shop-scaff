import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { CartItem } from '@/data/types';

export function ItemImage(
    { width, height, item }:
    { width: number, height: number, item: CartItem }
) {

    return (
        <SImage>
            <Image
                src={item.product.image}
                width={width}
                height={height}
                alt={item.product.shortname}
            />
        </SImage>
    )
}

const SImage = styled.picture`
    display: block;
    & > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;
