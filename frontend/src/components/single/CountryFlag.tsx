import {Box} from "@material-ui/core";

type Props = {
    countryFlag: string
}

const CountryFlag = ({countryFlag} : Props) => {
  return (
    <Box style={{
        padding: "4em",
        paddingTop: '2em'
      }}>
        <img style={{width: "100%"}} src={countryFlag} />
      </Box>
  );
};

export default CountryFlag