import React, { useContext } from "react";
import { ThemeProvider, createTheme, Palette } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import { PaletteMode } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const handleToggleDarkMode = () =>{
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home handleToggleDarkMode={handleToggleDarkMode} />
            } />
          <Route path="/country/:countryCode" element={
          <Single handleToggleDarkMode={handleToggleDarkMode}/>
          } />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;


