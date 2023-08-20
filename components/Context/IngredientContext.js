import React, {useState, createContext } from 'react'

const IngredientContext = createContext()

const IngredientProvider = ({children}) => {

    const [ingredients, setIngredients] = useState([]);

    const contextVariables = {
        ingredientObj: [ingredients, setIngredients], 
    }

    return (
        <IngredientContext.Provider 
        value={contextVariables}>
            {children}
        </IngredientContext.Provider>
    )
}

export {IngredientProvider, IngredientContext}