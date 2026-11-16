export interface Product {
    id: number;
    title: string;
}

export type Language = 'en-US' | 'de-DE' | 'pl-PL';

export type ProductsData = Record<Language, Product[]>;

export type ProductId = Omit<Product, "title">

export type ProductInBasket = ProductId & {
    quantity: number;
}