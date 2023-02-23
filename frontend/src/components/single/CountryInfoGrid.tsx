import {Grid, Typography } from "@material-ui/core";
import CountryDetails from '../../interfaces/CountryDetails';

type Props = {
    country: CountryDetails
}

const CountryInfoGrid = ({country} : Props) => {
    return (
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
                  </Grid>
    )
};

export default CountryInfoGrid