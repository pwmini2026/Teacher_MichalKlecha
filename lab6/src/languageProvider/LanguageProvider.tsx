import {type ReactNode, useState} from 'react';
import LanguageContext from './LanguageContext.ts';
import type {Language} from "../model/Product.ts";

interface LanguageProviderProps {
    children: ReactNode;
}

const LanguageProvider = ({children}: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>('en-US');

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;