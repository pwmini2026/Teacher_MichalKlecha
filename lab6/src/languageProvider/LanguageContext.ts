import { createContext } from 'react';
import type {Language} from "../model/Product.ts";

interface LanguageContextType {
	language: Language;
	setLanguage: (language: Language) => void;
}	

const LanguageContext = createContext<LanguageContextType>({
	language: 'en-US',
	setLanguage: () => {},
});

export default LanguageContext;