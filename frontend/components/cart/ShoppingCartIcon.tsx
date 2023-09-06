'use client';

import Link from 'next/link';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { totalCartItemsSelector } from "@/store/slices/selectors";
import { useAppSelector } from "@/store/store";

export function ShoppingCartIcon() {
    const totalItems = useAppSelector(totalCartItemsSelector);

    return (
        <StyledDiv $filled={!!totalItems}>
            <StyledLink href={'/cart'}>
                {!!totalItems
                    ? <LocalGroceryStoreIcon />
                    : <ShoppingCartOutlinedIcon />
                }
            </StyledLink>
            { !!totalItems &&
                <StyledValue>
                    {totalItems}
                </StyledValue>
            }
        </StyledDiv>
    )
}

const StyledDiv = styled.div<{ $filled?: boolean; }>`
    position: relative;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid var(--brd-color);
    color: gray;
    &:hover {
        cursor: pointer;
        color: orangered;
        border: 1px solid var(--menu-hover);
    }
    width: ${props => props.$filled ? '3rem' : '2.5rem'};
    height: ${props => props.$filled ? '3rem' : '2.5rem'};
    & svg {
        width: ${props => props.$filled && '2rem'};
        height: ${props => props.$filled && '2rem'};
    }
`;

const StyledValue = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    top: -4px;
    right: -4px;
    color: white;
    background: orangered;
    border-radius: 50%;
`;

const StyledLink = styled(Link)`
    display: grid;
    place-items: center;
`;
