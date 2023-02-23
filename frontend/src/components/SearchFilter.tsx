import { ChangeEventHandler, ChangeEvent, ReactNode } from "react";
import { Grid, TextField, Select, MenuItem } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  searchQuery: string,
  regionFilter: string,
  onSearch: ChangeEventHandler<HTMLInputElement>,
  onFilter: (event: ChangeEvent<{ value: unknown }>) => void
}

const SearchFilter = ({ searchQuery, onSearch, regionFilter, onFilter }: Props) => {
  return (
    <Grid container spacing={2} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2em'
    }}>
        <Grid item xs={12} sm={6} md={6}>
          <div style={{
            width: '100%'
          }}>
          <TextField
            fullWidth
            label={
              <span style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <SearchIcon style={{ marginRight: '5px' }} /> Search
              </span>
            }
            variant="outlined"
            value={searchQuery}
            onChange={onSearch}
            style={{maxWidth: '300px'}}
          />
          </div>
        </Grid>
      
      <Grid item xs={10} sm={5} md={3}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '4em',
          borderRadius: '4px',
          border: 'solid',
          borderWidth: '1px',
          borderColor: 'rgba(0, 0, 0, 0.23)',
          padding: '10px 20px'
        }}>
          <Select
            fullWidth
            value={regionFilter}
            onChange={onFilter}
            displayEmpty
            disableUnderline
          >
            <MenuItem value="" disabled>
              Filter by Region
            </MenuItem>
            <MenuItem value="africa">Africa</MenuItem>
            <MenuItem value="americas">Americas</MenuItem>
            <MenuItem value="asia">Asia</MenuItem>
            <MenuItem value="europe">Europe</MenuItem>
            <MenuItem value="oceania">Oceania</MenuItem>
          </Select>
        </div>
      </Grid>
    </Grid>
  );
};

export default SearchFilter;
