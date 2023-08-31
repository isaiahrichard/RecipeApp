import React, {useState, createContext } from 'react'

const LoginContext = createContext()

const LoginProvider = ({children}) => {

    const [username, setUsername] = useState("isaiah3415");
    const [password, setPassword] = useState("pass123");
    const [toggleCheckbox, setToggleCheckbox] = useState(false);
    const [name, setName] = useState("");

    const contextVariables = {
        usernameObj: [username, setUsername], 
        passwordObj: [password, setPassword],
        checkBoxObj: [toggleCheckbox, setToggleCheckbox],
        nameObj: [name, setName]
    }

    return (
        <LoginContext.Provider 
        value={contextVariables}>
            {children}
        </LoginContext.Provider>
    )
}

export {LoginProvider, LoginContext}