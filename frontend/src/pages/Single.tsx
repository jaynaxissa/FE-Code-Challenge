import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {Box, Typography, Grid} from "@material-ui/core";

import Header from "../components/Header";
import CountryFlag from "../components/single/CountryFlag";
import BorderCountries from "../components/single/BorderCountries";
import CountryInfoGrid from "../components/single/CountryInfoGrid";
import BackButton from "../components/single/BackButton";
import CountryDetails from "../interfaces/CountryDetails";
import CountryNameCode from "../interfaces/CountryNameCode";

type Props = {
  countryLookupTable: any
}

const Single = ({countryLookupTable}: Props) => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [country, setCountry] = useState<CountryDetails | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get<CountryDetails>(
          `https://restcountries.com/v2/alpha/${countryCode}`
        );
        const countryDetails = response.data;
        setCountry(countryDetails);

      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [countryCode]);

  // something went wrong
  if (!country) {
    return null;
  }

  // turn country codes into country names
  var borderCountries : CountryNameCode[] = [];
  if (countryLookupTable && country.borders && country.borders.length > 0) {
    borderCountries = country.borders.map(abbv => {
      const nameCode = {name: "", code: abbv};
      if (abbv in countryLookupTable) {
        nameCode.name = countryLookupTable[abbv];
      }
      return nameCode;
    })
  }

  return (
    <div>
      <Header />
      <BackButton text="Back"/>

      <div>
        <Box display="flex" justifyContent="center">
          <Grid container>
            
            <Grid item xs={12} sm={6}>
              <CountryFlag countryFlag={country.flag}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div style={{
                padding: "4em",
                paddingTop: '2em',
                paddingLeft: "2em"
              }}>
                <Typography gutterBottom variant="h4" component="h2">
                  {country.name}
                </Typography>
                <CountryInfoGrid country={country} />
                <BorderCountries borderCountries={borderCountries} />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

    </div>
  );
};

export default Single;
