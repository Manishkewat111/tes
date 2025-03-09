import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Icon, ThemeProvider, createTheme } from "@mui/material";

import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from './components/Hero';
import Feature from './components/Feature';
import Story from './components/Story';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Icon color="inherit" className='themeIcon'  onClick={toggleDarkMode}>
               {darkMode ? <Brightness7 /> : <Brightness4 />} 
      </Icon>
      <Header />
      <Hero/>
      <Feature/>
      <Story/>
      <Footer />
     </ThemeProvider>
    </div>
  );
}

export default App;
