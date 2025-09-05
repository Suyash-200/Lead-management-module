import { createContext, useContext, useState } from "react";
const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    document.body.style.overflowY = "hidden";
  };

  const stopLoading = () => {
    setIsLoading(false);
    document.body.style.overflowY = "visible";
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
