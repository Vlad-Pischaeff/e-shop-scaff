/** not used */
import React from "react";
import { CartItem } from '@/data/types';
import { AppDispatch } from '@/store/store';

const ProductContext = React.createContext<CartItem | undefined>(undefined);
const ProductActionContext = React.createContext<AppDispatch | undefined>(undefined);

function ProductProvider(
    { children, value, action }:
    {
        children: React.ReactNode,
        value: CartItem,
        action: AppDispatch
    }
) {
    return (
        <ProductActionContext.Provider value={action}>
            <ProductContext.Provider value={value}>
                {children}
            </ProductContext.Provider>
        </ProductActionContext.Provider>
    );
}

function useProductContext() {
    const context = React.useContext(ProductContext);

    if (context === undefined) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
}

function useProductActionContext() {
    const context = React.useContext(ProductActionContext);

    if (context === undefined) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
}

export { ProductProvider, useProductContext, useProductActionContext };
