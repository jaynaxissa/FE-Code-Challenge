import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import "./countryCard.css";
import { Link } from "react-router-dom";

interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alpha2Code: string;
}

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Card>
      <Link
        to={`/country/${country.alpha2Code}`}
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          image={country.flag}
          alt={country.name}
          className="card-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Population: {country.population}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Region: {country.region}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capital: {country.capital}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CountryCard;
