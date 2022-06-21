import { useState, createContext } from "react";

const GenreContext = createContext();

export function GenreProvider({ children }) {
  return <GenreContext.Provider value={{}}>{children}</GenreContext.Provider>;
}

export default GenreContext;
