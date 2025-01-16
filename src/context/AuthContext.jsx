import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // New state for error handling

  // Signup function with error handling
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setError(err.message);  // Handle signup errors
        throw err;  // Re-throw to allow other handlers to catch
      });
  }

  // Login function with error handling
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setError(err.message);  // Handle login errors
        throw err;  // Re-throw to allow other handlers to catch
      });
  }

  // Logout function with error handling
  function logout() {
    return signOut(auth)
      .catch((err) => {
        setError(err.message);  // Handle logout errors
        throw err;  // Re-throw to allow other handlers to catch
      });
  }

  // Listen for auth state changes (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
    error,  // Provide the error state to the rest of the app
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading...</div>}  {/* Show loading while checking auth state */}
    </AuthContext.Provider>
  );
}
