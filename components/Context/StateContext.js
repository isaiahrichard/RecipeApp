import React, {useState, createContext } from 'react'

const StateContext = createContext()

const StateProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({})
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [navigation, setNavigation] = useState({})

    const contextVariables = {
        currentUserObj: [currentUser, setCurrentUser],
        curretnRecipeObj: [currentRecipe, setCurrentRecipe],
        setNav: setNavigation,
        navigation: navigation
    }

    return (
        <StateContext.Provider 
        value={contextVariables}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext}