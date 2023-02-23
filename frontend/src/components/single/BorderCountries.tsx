import {Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CountryNameCode from "../../interfaces/CountryNameCode";

type Props = {
    borderCountries: CountryNameCode[]
}

const BorderCountries = ({borderCountries} : Props) => {
    if (borderCountries.length === 0) {
        return null;
    }

    return (
        <Box style={{
            alignItems: "center",
            marginTop: "2em",
        }}>
            <Typography gutterBottom component="p">
                <strong>Border Countries:</strong>
            </Typography>

            {borderCountries.map(( border:CountryNameCode, index:number ) => (
                <Link to={`/country/${border.code}`} style={{textDecoration: 'none'}} key={index}>
                    <Button variant="outlined" style={{ 
                        margin: "0.2em", 
                        textTransform: 'none'
                    }}>
                        {border.name}
                    </Button>
                </Link>
            ))}
        </Box>
    );
};

export default BorderCountries