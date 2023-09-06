import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export function ItemImage(
    { image, alt }:
    { image: string, alt: string }
) {
    return (
        <StyledImage>
            <Image
                src={image}
                width={128}
                height={100}
                alt={alt}
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
