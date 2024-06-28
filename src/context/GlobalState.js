import React, { createContext, useState } from 'react';

const GlobalState = createContext();

const GlobalStateProvider = ({ children }) => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const state = {
        expression, setExpression,
        result, setResult,
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    );
};

export { GlobalState, GlobalStateProvider };
