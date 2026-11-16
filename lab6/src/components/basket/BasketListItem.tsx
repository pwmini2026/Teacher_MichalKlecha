import QuantityBadge from "../quantityBadge/QuantityBadge.tsx";
import useShopStore from "../../store/useShopStore.ts";
import type {Product} from "../../model/Product.ts";

interface BasketListItemProps {
    product: Product;
    quantity: number;
}

const BasketListItem = ({ product, quantity }: BasketListItemProps) => {
    const addToBasket = useShopStore(state => state.addToBasket);
    const removeFromBasket = useShopStore(state => state.removeFromBasket);
    
    return (
        <li>
            <button
                className="button is-small tiny"
                style={{ marginRight: 2 }}
                onClick={() => removeFromBasket(product.id)}
            >
                <span className="icon">
                    <i className="fas fa-minus"></i>
                </span>
            </button>
            <QuantityBadge value={quantity} />
            <button
                className="button is-small tiny"
                style={{ marginLeft: 2 }}
                onClick={() => addToBasket(product.id)}
            >
                <span className="icon">
                    <i className="fas fa-plus"></i>
                </span>
            </button>
            <span style={{ marginLeft: 5 }}>{product.title}</span>
        </li>
    );
}

export default BasketListItem;