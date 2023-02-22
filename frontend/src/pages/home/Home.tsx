import React, { ChangeEvent, useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid } from "@material-ui/core";
import CountryCard from "../../components/countryCard/CountryCard";
import Header from "../../components/header/Header";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import "./home.css";

interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alpha2Code: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>(
          "https://restcountries.com/v2/all"
        );
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleFilter = (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: ReactNode
  ) => {
    // Logic for handling filter by region
    console.log(event.target.value);
    setRegionFilter(event.target.value as string);
  };

  return (
    <div>
      <Header />
      <SearchFilter
        searchQuery={searchQuery}
        regionFilter={regionFilter}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
      <div className="home-container">
        <Grid container spacing={10}>
          {countries
            .filter((country) => {
              const isSearch: boolean = country.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
              if (regionFilter) {
                return (
                  isSearch && country.region.toLowerCase() === regionFilter
                );
              }
              return isSearch;
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
