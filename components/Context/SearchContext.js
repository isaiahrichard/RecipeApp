import React, {useState, createContext } from 'react'
import { allIngredients } from '../../data/allIngredients';


const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [onSearch, setOnSearch] = useState(false);
    const [currSearch, setCurrSearch] = useState([]);
    const [ingredientList, setIngredientList] = useState(allIngredients)

    const contextVariables = {
        searchStateObj: [onSearch, setOnSearch], 
        currSearchObj: [currSearch, setCurrSearch],
        ingredientObj : [ingredientList, setIngredientList]
    }

    return (
        <SearchContext.Provider 
        value={contextVariables}>
            {children}
        </SearchContext.Provider>
    )
}

export {SearchProvider, SearchContext}