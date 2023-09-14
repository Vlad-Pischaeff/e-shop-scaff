import React from 'react';
import styled from 'styled-components';
import { ItemImage, Cost, Qty } from './elements';
import { TextNormal, TextBold, TextPrice } from '../common';

function ProductShortCard({children}: {children: React.ReactNode}) {
    return (
        <SDiv>
            {children}
        </SDiv>
    )
}

const SDiv = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 12px 16px;
    border-radius: 16px;
    background: #ffffffb4;
`;

ProductShortCard.Qty = Qty;
ProductShortCard.Cost = Cost;
ProductShortCard.Price = TextPrice;
ProductShortCard.NameFull = TextNormal;
ProductShortCard.NameShort = TextBold;
ProductShortCard.ItemImage = ItemImage;

export { ProductShortCard };
