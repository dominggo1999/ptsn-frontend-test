import React from 'react'
import ThemeProvider from '../src/context/ThemeContext'
import { BrowserRouter } from 'react-router-dom';

// Custom global styles and variables
import '../src/styles/variables.css';

export const Provider = ({ children }) => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </ThemeProvider>
  )
}