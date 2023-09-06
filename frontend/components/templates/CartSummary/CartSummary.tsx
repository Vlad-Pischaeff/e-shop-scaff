import React from 'react';
import styled from 'styled-components';
import { TotalValue, PaymentButton } from './elements';

function CartSummary(
    { children, onSubmit }:
    {
        children: React.ReactNode,
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    }
) {
    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledDiv>
                {children}
            </StyledDiv>
        </StyledForm>
    )
}

const StyledDiv = styled.div`
    background: darkgray;
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 8px;
    height: fit-content;
    min-height: 8rem;
`;

const StyledForm = styled.form`
    flex: 0 0 12rem;
`;

CartSummary.TotalValue = TotalValue;
CartSummary.PaymentButton = PaymentButton;

export { CartSummary };
