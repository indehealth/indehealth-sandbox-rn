import { createContext, useContext, useState } from "react";

const LoginContext = createContext({});

export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
