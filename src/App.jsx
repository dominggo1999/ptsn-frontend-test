import React from 'react';
import ThemeProvider from './context/ThemeContext';
import UsersProvider from './context/UsersContext';

const App = () => {
  return (
    <ThemeProvider>
      <UsersProvider>
      </UsersProvider>
    </ThemeProvider>
  );
};

export default App;
