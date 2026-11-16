import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import productsData from '../data';
import type {ProductId, ProductInBasket, ProductsData} from "../model/Product.ts";

export interface ShopState {
    products: ProductsData;
    likedProducts: ProductId[];
    productsInBasket: ProductInBasket[];
    toggleLiked: (productId: number) => void;
    addToBasket: (productId: number) => void;
    removeFromBasket: (productId: number) => void;
}

const useShopStore = create<ShopState>()(
    devtools((set, get) => ({
        products: productsData,
        likedProducts: [],
        productsInBasket: [],

        toggleLiked: (productId: number) => {
            const isLiked = get().likedProducts.find((product: ProductId) => product.id === productId);
            set(state => {
                return {
                    likedProducts: isLiked
                        ? state.likedProducts.filter((product: ProductId) => product.id !== productId) // remember - filter creates a new array
                        : [...state.likedProducts, {id: productId}]
                };
            });
        },

        addToBasket: (productId: number) => {
            const productsInBasket = get().productsInBasket;
            let newBasket;

            const index = productsInBasket.findIndex((product: ProductInBasket) => product.id === productId);
            if (index < 0) {
                const newItem = {
                    id: productId,
                    quantity: 1
                };
                newBasket = [...productsInBasket, newItem]
            } else {
                const foundItem = productsInBasket[index];
                const newItem = {...foundItem, quantity: foundItem.quantity + 1};
                const newProductsInBasket = productsInBasket.slice();
                newProductsInBasket[index] = newItem;

                newBasket = newProductsInBasket
            }

            set({productsInBasket: newBasket});
        },

        removeFromBasket: (productId: number) => {
            const productsInBasket = get().productsInBasket;
            let newBasket;

            const index = productsInBasket.findIndex((product: ProductInBasket) => product.id === productId);
            if (index < 0) {
                return
            }

            const foundItem = productsInBasket[index];
            if (foundItem.quantity === 1) {
                newBasket = productsInBasket.filter((product: ProductInBasket) => product.id !== productId)
            } else {
                const newItem = {...foundItem, quantity: foundItem.quantity - 1};
                newBasket = productsInBasket.slice();
                newBasket[index] = newItem;
            }

            set({productsInBasket: newBasket});
        },
    }))
);

export default useShopStore;
