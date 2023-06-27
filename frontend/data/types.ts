export type Product = {
    "id": number,
    "catId": string,
    "subCatId": string,
    "shortname": string,
    "fullname": string,
    "price": string,
    "oldPrice": string,
    "image": string
}

export type CartItem = {
    product: Product,
    qty: number
}
