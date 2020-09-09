import React, { createContext, useContext, useReducer } from "react";
//con esto guaras la data , seria como un store
export const StateContext = createContext();

//con esto wrapeas a los componentes para que puedan acceder a la data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// con esto jalas o usas la data del store , donde la quieras usar
export const useStateValue = () => useContext(StateContext);
