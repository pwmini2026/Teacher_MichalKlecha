import ProductListItem from './ProductListItem.tsx';
import { useContext } from 'react';
import LanguageContext from '../../languageProvider/LanguageContext.ts';
import useShopStore from '../../store/useShopStore.ts';

const ProductsList = () => {
	const { language } = useContext(LanguageContext);
	const products = useShopStore(state => state.products[language]);

	return (
		<div className="box mr-5 ml-5">
			<h2 className="title">Products</h2>
			<ul>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default ProductsList;