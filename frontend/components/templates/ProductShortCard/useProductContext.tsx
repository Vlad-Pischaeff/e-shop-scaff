import React from "react";
import { CartItem } from '@/data/types';

const ProductContext = React.createContext<CartItem | undefined>(undefined);

function ProductProvider(
    { children, value }:
    {
        children: React.ReactNode,
        value: CartItem
    }
) {
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}

function useProductContext() {
    const context = React.useContext(ProductContext);

    if (context === undefined) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
}

export { ProductProvider, useProductContext };
