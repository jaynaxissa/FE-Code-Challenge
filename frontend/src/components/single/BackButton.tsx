import {Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type Props = {
    text: string
}

const BackButton = ({text} : Props) => {
    return (
        <Link to="/" style = {{textDecoration: 'none', marginLeft: '4em'}}>
        <Button variant="outlined" size="large" style={{textTransform: 'none', marginTop: '2em'}}>
          <KeyboardBackspaceIcon style={{marginRight: '4px'}}/>
          <p style={{margin: 0}}>{text}</p>
        </Button>
      </Link>
    );
};

export default BackButton