import React, {useState, createContext } from 'react'
import { cachedIngredients } from '../../data/CachedIngredients';


const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [onSearch, setOnSearch] = useState(false);
    const [currSearch, setCurrSearch] = useState(cachedIngredients);

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