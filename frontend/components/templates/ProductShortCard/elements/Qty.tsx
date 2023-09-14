import React from 'react';
import styled from 'styled-components';
import { decrement, increment, removeItem } from '@/store/slices/cartSlice';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartItem } from '@/data/types';
import { AppDispatch } from '@/store/store';
import s from './styles.module.sass';

export function Qty(
    { item, dispatch }:
    {
        item: CartItem,
        dispatch: AppDispatch
    }
) {

    return (
        <div>
            <SDiv>
                {item.qty === 1
                    ? (<DecreaseQtyDisabled />)
                    : (<DecreaseQty onClick={() => dispatch(decrement(item.product))} />)
                }
                <p>{item.qty}</p>
                <IncreaseQty onClick={() => dispatch(increment(item.product))} />
            </SDiv>
            <DeleteItem onClick={() => dispatch(removeItem(item.product.id))} />
        </div>
    );
};

const SDiv = styled.div`
    display: flex;
    gap: 4px;
    padding: 4px 0;
    background: #96e5f247;
    justify-content: space-around;
    border-radius: 16px;
    margin: 4px 0;
`;

const DecreaseQtyDisabled = styled(RemoveCircleOutlineIcon)`
    color: #ccc;
`;

const DeleteItem = React.memo(function({onClick}: {onClick: () => void}) {
    return (
        <DeleteOutlineIcon onClick={onClick} className={s.icon} />
    )
}, () => true);

const IncreaseQty = React.memo(function({onClick}: {onClick: () => void}) {
    return (
        <AddCircleOutlineIcon onClick={onClick} className={s.icon} />
    )
}, () => true);

const DecreaseQty = React.memo(function({onClick}: {onClick: () => void}) {
    return (
        <RemoveCircleOutlineIcon onClick={onClick} className={s.icon} />
    )
}, () => true);
