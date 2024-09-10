import React, { useState, createContext, useEffect } from "react";

export const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [newItemsAdded, setNewItemsAdded] = useState(
    JSON.parse(localStorage.getItem("newItemsAdded")) || {
      state: false,
      number: 0,
    }
  );

  // Store not seen new items added to the cart in the localStorage
  useEffect(() => {
    localStorage.setItem("newItemsAdded", JSON.stringify(newItemsAdded));
  }, [newItemsAdded]);

  function handleOpenSidebar() {
    // Open and close the sidebar
    setShowSidebar(!showSidebar);
    // Reset the new items to 0
    setNewItemsAdded({ ...newItemsAdded, state: false, number: 0 });
  }

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        newItemsAdded,
        setNewItemsAdded,
        handleOpenSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
