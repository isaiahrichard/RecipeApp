import React, {useState, createContext } from 'react'
import { ingredients } from '../../data/IngredientList';

const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [onSearch, setOnSearch] = useState(false);
    const [currSearch, setCurrSearch] = useState(ingredients);

    const contextVariables = {
        searchStateObj: [onSearch, setOnSearch], 
        currSearchObj: [currSearch, setCurrSearch],
    }

    return (
        <SearchContext.Provider 
        value={contextVariables}>
            {children}
        </SearchContext.Provider>
    )
}

export {SearchProvider, SearchContext}