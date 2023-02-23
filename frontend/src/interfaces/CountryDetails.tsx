export default interface CountryDetails {
    name: string;
    nativeName: string;
    flag: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: { name: string }[];
    languages: { name: string }[];
    borders: string[];
  }