// We need this to track the cart
import React, { createContext, useContext, useReducer } from 'react';

// Setting up the Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)} >
    {children}
  </StateContext.Provider>
)

// Use this inside of a component
export const useStateValue = () => useContext(StateContext);