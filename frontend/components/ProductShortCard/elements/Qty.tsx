import styled from 'styled-components';
import { decrement, increment, removeItem } from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/store/store';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useProductContext } from '../useProductContext';
import s from './styles.module.sass';

export function Qty() {
    const item = useProductContext();
    const dispatch = useAppDispatch();

    return (
        <div>
            <QtyWrap>
                {item.qty === 1
                    ? (<RemoveCircleOutlineIcon className={s.iconDisbl} />)
                    : (<RemoveCircleOutlineIcon
                            className={s.icon}
                            onClick={() => dispatch(decrement(item.product))} />)
                }
                <p>{item.qty}</p>
                <AddCircleOutlineIcon
                    className={s.icon}
                    onClick={() => dispatch(increment(item.product))} />
            </QtyWrap>
            <DeleteOutlineIcon
                className={s.icon}
                onClick={() => dispatch(removeItem(item.product.id))} />
        </div>
    );
};

const QtyWrap = styled.div`
    display: flex;
    gap: 4px;
    padding: 4px 0;
    background: #96e5f229;
    justify-content: space-around;
    border-radius: 16px;
    margin: 4px 0;
`;