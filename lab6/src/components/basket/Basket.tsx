import {useContext} from 'react';
import LanguageContext from '../../languageProvider/LanguageContext.ts';
import useShopStore from '../../store/useShopStore.ts';
import BasketListItem from './BasketListItem.tsx';
import type {Language, ProductInBasket} from "../../model/Product.ts";

const Basket = () => {
    const emptyBasketText: Record<Language, string> = {
        'en-US': 'Your basket is empty.',
        'de-DE': 'Ihr Warenkorb ist leer.',
        'pl-PL': 'Twój koszyk jest pusty.',
    };

    const language = useContext(LanguageContext).language as Language;
    const productsIdsInBasket = useShopStore(state => state.productsInBasket);
    const products = useShopStore(state => state.products[language]);

    const productsInBasket = productsIdsInBasket.map((productInBasket: ProductInBasket) => ({
        product: products.find((product) => product.id === productInBasket.id)!,
        quantity: productInBasket.quantity
    }));

    return (
        <div className="box">
            <h2 className="title">Basket</h2>
            {productsInBasket.length === 0 ? (
                <p>{emptyBasketText[language]}</p>
            ) : (
                <ul>
                    {productsInBasket.map(itemProps =>
                        <BasketListItem key={itemProps.product.id} {...itemProps}/>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Basket;