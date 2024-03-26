import React from 'react'
import data from "../data.json"
import { useState } from 'react'
import { Container, FilterByRegionStyles, SearchBarStyles, Wrapper } from '../Search/SearchStyles'
import { FaSearch } from 'react-icons/fa' 
import CountriesContainer from '../CountriesRender/CountriesContainer'



const Search = () => {

  const[userCountry, setUserCountry] = useState("");
  const[region, setRegion] = useState("")
  
   const filterCountry = data.filter( (country) => 
   country.name.toLowerCase().includes(userCountry.toLowerCase()) &&
    (!region || country.region == region));
     
  
      return (
      <>
       <Container>
         <Wrapper>
          <FaSearch />
          <SearchBarStyles
              type="text"
              name='search'
              id='search'
              value={userCountry}
              onChange={(e) => setUserCountry(e.target.value)}
              placeholder="Search for a country..." />   
            </Wrapper>
          <FilterByRegionStyles
                   name="Filter by Region"
                   id="region"
                   value={region}
                   onChange={(e) => setRegion(e.target.value)}
           >
                      <option >Filter by Region</option>
                      <option value="Americas">America</option>
                      <option value="Africa">Africa</option>
                      <option value="Oceania">Oceania</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia">Asia</option>
                      <option value="Polar">Polar</option>
                      <option value="Antarctic Ocean">Antarctic Ocean</option>
                            
          </FilterByRegionStyles>              
        </Container> 
        
        
        <CountriesContainer countries={filterCountry}/>      
      </>
      );
};
  





export default Search
