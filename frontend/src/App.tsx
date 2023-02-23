import { useState, useEffect } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Single from "./pages/Single";
import Country from './interfaces/Country';

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito Sans',
  },
});

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryLookupTable, setCountryLookupTable] = useState<Object | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>(
          "https://restcountries.com/v2/all"
        );

        const allCountries = response.data;
        setCountries(allCountries);

        const lookup = {};
        allCountries.forEach(c => {
          const countryCode = c.alpha3Code;
          const countryName = c.name;
          lookup[countryCode] = countryName;
        });
        setCountryLookupTable(lookup);

      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home countries={countries} />
          } />
          <Route path="/country/:countryCode" element={
            <Single countryLookupTable={countryLookupTable}/>
          } />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;


