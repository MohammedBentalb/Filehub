import { ReactNode, createContext, useState } from 'react';
import { AuthUserType } from '../../types/types';

type ContextProps = {
  user: AuthUserType | object;
  token: string | null;
  setUser: (user: AuthUserType | object) => void;
  setToken: (token: string | null) => void;
};

const AuthContext = createContext<ContextProps>({
  user: {},
  token: null,
  setUser: () => {},
  setToken: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
