import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import Admin from './Admin';
import { AuthProvider } from './auth';

function App() {
  console.error("App.tsx called!! localStorage.getItem('accessToken')", localStorage.getItem('accessToken'));
  return (
    <AuthProvider>
      <BrowserRouter>
        {localStorage.getItem('accessToken') ? <Redirect to="/" /> : <Redirect to="login" />}
        <Route exact path="/" render={() => <Admin />} />
        <Route exact path="/login" render={(props) => <LoginScreen {...props} />} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
