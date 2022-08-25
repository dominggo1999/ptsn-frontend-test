import React from 'react';
import ThemeProvider from './context/ThemeContext';
import UsersProvider from './context/UsersContext';
import Header from './layout/Header/Header';

const App = () => {
  return (
    <ThemeProvider>
      <UsersProvider>
        <Header />
      </UsersProvider>
    </ThemeProvider>
  );
};

export default App;
