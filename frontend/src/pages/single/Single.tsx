import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header/Header";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { border, borders } from "@mui/system";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  media: {
    padding: "3em",
  },
  flagImg: {
    width: "100%",
  },
  detailsArea: {
    padding: "3em",
    paddingLeft: "2em",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "2rem",
    width: "50%",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "2rem",
    width: "50%",
  },
});

interface MatchParams {
  countryCode: string;
}

interface Country {
  name: string;
  nativeName: string;
  flag: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: { name: string }[];
  languages: { name: string }[];
  borders: string[];
}

const Single = ({handleToggleDarkMode}) => {
  const classes = useStyles();
  const { countryCode } = useParams<{ countryCode: string }>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get<Country>(
          `https://restcountries.com/v2/alpha/${countryCode}`
        );
        setCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [countryCode]);

  if (!country) {
    return null;
  }

  const borderCountries =
    country.borders && country.borders.length > 0 ? country.borders : [];

  return (
    <div>
      <div>
        <Header handleToggleDarkMode={handleToggleDarkMode}/>
        <Link to="/">
          <Button variant="outlined" color="primary" size="large">
            <KeyboardBackspaceIcon />
            Back
          </Button>
        </Link>
      </div>
      <div>
        <Box display="flex" justifyContent="center">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box className={classes.media}>
                <img className={classes.flagImg} src={country.flag} />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className={classes.detailsArea}>
                <Typography gutterBottom variant="h4" component="h2">
                  {country.name}
                </Typography>
                <Grid container>
                  <Grid item xs={12} sm={6} style={{ paddingRight: "1em" }}>
                    <Typography variant="body1" component="p">
                      <strong>Native Name:</strong> {country.nativeName}
                    </Typography>
                    <Typography variant="body1" component="p">
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString()}
                    </Typography>
                    <Typography variant="body1" component="p">
                      <strong>Region:</strong> {country.region}
                    </Typography>
                    <Typography variant="body1" component="p">
                      <strong>Sub Region:</strong> {country.subregion}
                    </Typography>
                    <Typography variant="body1" component="p">
                      <strong>Capital:</strong> {country.capital}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} style={{ paddingLeft: "1em" }}>
                    <Typography variant="body1" component="p">
                      <strong>Top Level Domain:</strong>{" "}
                      {country.topLevelDomain.join(", ")}
                    </Typography>
                    <Typography variant="body1" component="p">
                      <strong>Currencies:</strong>{" "}
                      {country.currencies
                        .map((currency) => currency.name)
                        .join(", ")}
                    </Typography>
                    <Typography variant="body1" component="p">
                      <strong>Languages:</strong>{" "}
                      {country.languages
                        .map((language) => language.name)
                        .join(", ")}
                    </Typography>
                  </Grid>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "2em",
                    }}
                  >
                    <Typography gutterBottom component="p">
                      Border Countries
                    </Typography>
                    {borderCountries.map((border) => (
                      <Link to={`/country/${border}`}>
                        <Button
                          variant="outlined"
                          style={{ marginLeft: "0.5em" }}
                        >
                          {border}
                        </Button>
                      </Link>
                    ))}
                  </Box>
                </Grid>
                {/* grid container */}
              </div>
            </Grid>
            {/* grid item  */}
          </Grid>
          {/* grid container */}
        </Box>
      </div>
    </div>
  );
};

export default Single;
