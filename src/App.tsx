import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './Containers/ProductList';
import Demo from './Demo';
import Checkout from './Containers/Checkout';
import ThemeSwitch from './components/ThemeSwitch';
import { ThemeContext } from './context';
import AppRouter from './AppRouter';
import { BrowserRouter } from "react-router-dom"
import Menu from './components/Menu';

function App() {
  let [theme, setTheme]= useState("light")
  return (
    <BrowserRouter>
      {/* <Demo></Demo> */}
      <ThemeSwitch changeTheme={(t)=> setTheme(t)}/>
      <ThemeContext.Provider value={theme}>
        {/* <ProductList /> */}
        <Menu />
        <AppRouter/>
      </ThemeContext.Provider>
      {/* <Checkout></Checkout> */}
      
    </BrowserRouter>
  );
}

export default App;
