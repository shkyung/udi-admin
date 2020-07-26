import React, { createContext, ReactNode, useContext, useState } from 'react';
import { login } from './api/login';

export interface AuthState {
  isAuth: boolean;
  login: ({ username, password }: { username: string; password: string }) => Promise<void>;
  logout: () => void;
}
// @ts-ignore
const AuthContext = createContext<AuthState>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider
      value={{
        login: async ({ username, password }: { username: string; password: string }) => {
          await login({ username, password });
        },
        logout: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(): AuthState {
  if (AuthContext === undefined) {
    throw new Error('there is no AuthContext');
  }
  return useContext(AuthContext);
}
