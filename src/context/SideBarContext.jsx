import { createContext, useState } from "react";

export const SideBarContext = createContext();

// eslint-disable-next-line react/prop-types
function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
}

export default SideBarProvider;
