import React from "react";

const ProductContext = React.createContext({});

function ProductProvider(
    { children, value }:
    {
        children: React.ReactNode,
        value: object
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
