import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

//useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
//useContext(MyContext) only lets you read the context and subscribe to its changes. You still need a <MyContext.Provider> above in the tree to provide the value for this context.
//createContext is The way changes are determined can cause some issues when passing objects as value: see Caveats.
