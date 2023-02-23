import { ChangeEvent, useState, ReactNode } from "react";
import { Grid } from "@material-ui/core";

import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import Country from "../interfaces/Country";

type Props = {
  countries: Country[]
}

const Home = ({countries}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleFilter = (event: ChangeEvent<{ value: unknown }>) => {
    setRegionFilter(event.target.value as string);
  };

  return (
    <div style={{
      backgroundColor: "#fafafa"
    }}>
      <Header />
      
      <div style={{
        marginLeft: "4em",
        marginTop: "2em"
      }}>
        <SearchFilter
          searchQuery={searchQuery}
          regionFilter={regionFilter}
          onSearch={handleSearch}
          onFilter={handleFilter}
        />
      </div>

      <div style={{
        padding: "40px 35px",
        marginLeft: "2em",
        marginRight: "2em"
      }}>
        <Grid container spacing={10}>
          {countries
            .filter((country) => {
              // if part of the search query, defaults to yes
              const isSearchCountry = country.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
              
              // if part of region, defaults to yes 
              const isRegionFilter = country.region
                .toLowerCase()
                .includes(regionFilter.toLocaleLowerCase());
              
              // if part of both
              return isSearchCountry && isRegionFilter;
            })
            .map((country) => (
              <Grid key={country.name} item xs={12} sm={6} md={4} lg={3}>
                <CountryCard country={country} />
              </Grid>
            ))}
        </Grid>
      </div>

    </div>
  );
};

export default Home;
