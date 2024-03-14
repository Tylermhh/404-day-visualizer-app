import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userID: string | null; // Include user ID in the context
  login: (token: string, userID: string) => void;
  logout: () => void;
}

// Create a context with an initial undefined state to ensure type safety
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userID, setUserID] = useState<string | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserID = localStorage.getItem('userID');
    if (token) {
      setIsAuthenticated(true);
      if (storedUserID) setUserID(storedUserID); // Set the user ID if available
    }
  }, []);

  const login = (token: string, userID: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userID', userID); // Store user ID
    setIsAuthenticated(true);
    setUserID(userID); // Update state
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID'); // Clear user ID from storage
    setIsAuthenticated(false);
    setUserID(null); // Reset user ID state
  };

  // Ensure to provide all context values
  const contextValue = { isAuthenticated, userID, login, logout };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
