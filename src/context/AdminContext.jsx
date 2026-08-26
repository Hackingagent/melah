import { createContext, useContext, useEffect, useState } from 'react';

const AdminContext = createContext(null);
const adminSessionKey = 'melah-admin-session';

// Simple local front-end access only.
const adminCredentials = { username: 'admin', password: 'melah' };

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem(adminSessionKey) === 'true');
  useEffect(() => localStorage.setItem(adminSessionKey, String(isAdmin)), [isAdmin]);

  const signIn = (username, password) => {
    const isValid = username === adminCredentials.username && password === adminCredentials.password;
    setIsAdmin(isValid);
    return isValid;
  };

  return <AdminContext.Provider value={{ isAdmin, signIn, signOut: () => setIsAdmin(false) }}>{children}</AdminContext.Provider>;
};

export const useAdmin = () => useContext(AdminContext);
