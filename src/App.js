import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes.js'
import './index.css'
import Home from './pages/Home.js';
import styled from 'styled-components';

const Portfolio = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;
function App() {

  return (
    <Portfolio>
      <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </Portfolio >
  );
}

export default App;