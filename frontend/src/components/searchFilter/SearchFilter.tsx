import React, {
  ChangeEventHandler,
  ChangeEvent,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";
import { Grid, TextField, Button, Select, MenuItem } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import "./searchFilter.css";

const SearchFilter = ({
  searchQuery,
  onSearch,
  regionFilter,
  onFilter,
}: {
  searchQuery: string;
  regionFilter: string;
  onSearch: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFilter: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: ReactNode
  ) => void;
}) => {
  return (
    <Grid className="searchFilterBar">
      <div className="searchBar">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label={
              <span className="insideSearchBar">
                <SearchIcon className="icon" /> Search for a country...
              </span>
            }
            variant="outlined"
            value={searchQuery}
            onChange={onSearch}
          />
        </Grid>
      </div>
      <div className="filterTab">
        <Grid spacing={10} item xs={12} sm={3}>
          <Select
            fullWidth
            value={regionFilter}
            onChange={onFilter}
            displayEmpty
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
        </Grid>
      </div>
    </Grid>
  );
};

export default SearchFilter;
