import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('luxonixstacks_admin_user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Session verification error:', err);
      localStorage.removeItem('luxonixstacks_admin_user');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // In production, this connects to a secure authentication backend API
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@luxonixstacks.com';
      const adminPass = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

      if (email.trim().toLowerCase() === adminEmail.toLowerCase() && password === adminPass) {
        const userData = {
          id: '1',
          email: adminEmail,
          name: 'Admin User',
          role: 'Administrator',
        };
        setUser(userData);
        localStorage.setItem('luxonixstacks_admin_user', JSON.stringify(userData));
        setLoading(false);
        return { success: true };
      } else {
        setLoading(false);
        return { success: false, error: 'Invalid email or password' };
      }
    } catch {
      setLoading(false);
      return { success: false, error: 'Authentication service error' };
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('luxonixstacks_admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
