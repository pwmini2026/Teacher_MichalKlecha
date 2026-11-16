import { useState } from 'react';
import Basket from './components/basket/Basket.tsx';
import ProductsList from './components/productList/ProductsList.tsx';
import LanguagePicker from './languageProvider/LanguagePicker.tsx';
import LanguageProvider from './languageProvider/LanguageProvider.tsx';

type View = 'products' | 'basket';

const App = () => {
	const [view, setView] = useState<View>('products');

	return (
		<LanguageProvider>
			<div className="container">
				<LanguagePicker />
				<div className="buttons is-centered">
					<button
						className={`button is-info ${
							view === 'products' ? 'is-selected' : ''
						}`}
						onClick={() => setView('products')}
					>
						Products
					</button>
					<button
						className={`button is-info ${
							view === 'basket' ? 'is-selected' : ''
						}`}
						onClick={() => setView('basket')}
					>
						Basket
					</button>
				</div>

				{view === 'products' ? <ProductsList /> : <Basket />}
			</div>
		</LanguageProvider>
	);
};

export default App;