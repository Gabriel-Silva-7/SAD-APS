import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [collapsedMenu, setCollapsedMenu] = useState(
    screen.width > 700 ? false : true
  );

  return (
    <MenuContext.Provider value={{ collapsedMenu, setCollapsedMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  return context;
}
