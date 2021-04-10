import React, { createContext, useContext, useReducer } from 'react';

// prepare data layer
export const StateContext = createContext();

// wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from thedata layer
export const useStateValue = () => useContext(StateContext)