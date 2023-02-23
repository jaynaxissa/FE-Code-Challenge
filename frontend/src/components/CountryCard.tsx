import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Country from '../interfaces/Country';

type Props = {
  country: Country;
}

const useStyles = makeStyles({
  text: {
    color: '#000'
  },
});


const CountryCard = ({ country } : Props) => {
  const classes = useStyles();

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
          style={{
            height: '195px',
            width: '297px'
          }}
        />

        <CardContent style={{height: '170px'}}>
          
          <Typography gutterBottom component="h2" className={classes.text}>
            {country.name}
          </Typography>

          <Typography variant="body2" color="primary" component="p" className={classes.text}>
            Population: {country.population}
          </Typography>
          
          <Typography variant="body2" component="p" className={classes.text}>
            Region: {country.region}
          </Typography>
          
          <Typography variant="body2" component="p" className={classes.text}>
            Capital: {country.capital}
          </Typography>
        
        </CardContent>
      </Link>
    </Card>
  );
};

export default CountryCard;
