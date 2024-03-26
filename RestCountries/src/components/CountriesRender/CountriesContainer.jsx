import React from 'react'
import { CountriesContainerStyles, IndividualContainer, Details, LinkStyled } from './CountriesContainerStyles'


const CountriesContainer = ({countries}) => {

    return (
    <>
      
       <CountriesContainerStyles  >
    
       {countries?.map( country => {
         
         const{name, flag, population, region, capital} = country;

         return <IndividualContainer   key={Math.random()}>
                            <LinkStyled to={name}>
                            <img alt={name} src={flag} />
                            <h5>{name}</h5>
                            <Details >
                               <li> <h6>Population: </h6>
                                <span>{population}</span></li>
                                <li> <h6>Region: </h6>
                                <span>{region}</span></li>
                                <li> <h6>Capital: </h6>
                                <span>{capital}</span></li>
                            </Details>
                            </LinkStyled>
                </IndividualContainer>
        
       })}
         

      </CountriesContainerStyles>
      
    </>
  )
}

export default CountriesContainer
