import useShopStore, {type ShopState} from '../../store/useShopStore.ts';
import QuantityBadge from '../quantityBadge/QuantityBadge.tsx';
import type {Product} from "../../model/Product.ts";

interface ProductListItemProps {
    product: Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {
    const isLiked = useShopStore(state => state.likedProducts.find(productId => productId.id === product.id));
    const toggleLiked = useShopStore(state => state.toggleLiked);
    const addToBasket = useShopStore(state => state.addToBasket);
    const basketQuantity = useShopStore(state => selectQuantity(product.id, state));

    return (
        <li>
            <span style={{marginRight: 5}}>{product.title}</span>
            <span
                onClick={() => toggleLiked(product.id)}
                style={{cursor: 'pointer', marginRight: 5}}
            >
				<i
                    className={`fa-heart ${isLiked ? 'fas' : 'far'}`}
                    style={{color: isLiked ? 'green' : 'grey'}}
                ></i>
			</span>

            <span
                style={{color: 'blue', cursor: 'pointer'}}
                onClick={() => addToBasket(product.id)}
            >
				<i className={`fas fa-cart-plus`} style={{color: 'blue'}}></i>
                {basketQuantity ? <QuantityBadge value={basketQuantity}/> : null}
			</span>
        </li>
    );
};

export default ProductListItem;

const selectQuantity = (productId: number, state: ShopState): number => {
    const foundItem = state.productsInBasket.find(item => item.id === productId);
    return foundItem?.quantity ?? 0;
}