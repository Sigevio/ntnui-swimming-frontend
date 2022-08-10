import { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextType = {
  user: boolean,
  login: () => void,
  logout: () => void
}

const AuthContextDefaultValues: AuthContextType = {
  user: false,
  login: () => {},
  logout: () => {}
}

const AuthContext = createContext<AuthContextType>(AuthContextDefaultValues);

export const useAuth = () => {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<boolean>(false);

  const login = () => {
    setUser(true);
  }

  const logout = () => {
    setUser(false);
  }

  const value = {
    user,
    login,
    logout
  }

  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
