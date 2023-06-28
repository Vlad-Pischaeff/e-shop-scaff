export type Product = {
    "id": number,
    "catId": string,
    "subCatId": string,
    "shortname": string,
    "fullname": string,
    "price": number,
    "oldPrice": number,
    "image": string
}

export type CartItem = {
    product: Product,
    qty: number
}
