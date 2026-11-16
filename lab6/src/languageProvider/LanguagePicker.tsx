import {useContext} from 'react';
import LanguageContext from './LanguageContext.ts';
import type {Language} from "../model/Product.ts";

const LanguagePicker = () => {
    const {setLanguage} = useContext(LanguageContext);

    return (
        <div className="field">
            <label className="label">Select Language</label>
            <div className="control">
                <div className="select">
                    <select onChange={(e) => setLanguage(e.target.value as Language)}>
                        <option value="en-US">English</option>
                        <option value="de-DE">Deutsch</option>
                        <option value="pl-PL">Polski</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default LanguagePicker;