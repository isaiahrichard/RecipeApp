import React, {useState, createContext } from 'react'

const StateContext = createContext()

const StateProvider = ({children}) => {

    const [username, setUsername] = useState("test");
    const [password, setPassword] = useState("testPass");
    const [toggleCheckbox, setToggleCheckbox] = useState(false);

    const contextVariables = {
        usernameObj: [username, setUsername], 
        passwordObj: [password, setPassword],
        checkBoxObj: [toggleCheckbox, setToggleCheckbox]
    }

    return (
        <StateContext.Provider 
        value={contextVariables}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext}