import React, {useState, createContext } from 'react'

const StateContext = createContext()

const StateProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({})

    const contextVariables = {
        currentUserObj: [currentUser, setCurrentUser]
    }

    return (
        <StateContext.Provider 
        value={contextVariables}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext}