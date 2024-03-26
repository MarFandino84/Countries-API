import React from 'react'
import { useParams } from 'react-router'
import data from "../data.json"
import { useNavigate } from 'react-router'
import { Details, ButtonStyle, BorderBox, ArticleSection, ArticleContainer } from './CountryinnStyles'
import { FaArrowLeft } from 'react-icons/fa'


const Contryinn = () => {

const {name} = useParams()

const country = data.find((x) => x.name === name );

const navigateBack = useNavigate()

const fullName = (dato) => {
     return data.find(x => x.alpha3Code == dato)
}


    return (
    <>
           <ButtonStyle onClick={() => navigateBack("/")}><FaArrowLeft /> Back</ButtonStyle>    
                             <Details>
                             <section>
                                  <img alt={name}  src={country.flag}/>
                             </section>
                             <section>
                             <h2>{name}</h2>
                             <ArticleContainer>
                             <ArticleSection>  
                                <li> <h6>Native Name : </h6>
                                <span>{country.nativeName}</span></li>
                                <li> <h6>Population : </h6>
                                <span>{country.population}</span></li>
                                <li> <h6>Region : </h6>
                                <span>{country.region}</span></li>
                                <li> <h6>SubRegion : </h6>
                                <span>{country.subregion}</span></li>
                                <li> <h6>Capital : </h6>
                                <span>{country.capital}</span></li>
                              </ArticleSection>
                              <ArticleSection>
                                <li> <h6>Top Level Name : </h6>
                                <span>{country.topLevelDomain}</span></li>
                                <li> <h6>Currencies : </h6>
                                <span>{country.currencies?.map(x => {
                                   return <span key={Math.random()}>{x.name}</span>
                                })}</span></li>
                                <li> <h6>Languages : </h6>
                                <span>{country.languages?.map(x => {
                                  return <span key={Math.random()}>{x.name}</span> 
                                  })}</span></li>
                               </ArticleSection>
                               </ArticleContainer>
                              
                                <BorderBox>                            
                                   <h2>Borders Country:</h2>
                                  <ul> {country.borders?.map(x => {
                                     return <li key={Math.random()}> 
                                     <div>{fullName(x).name}</div>
                                     </li>
                                  })} </ul>
                               </BorderBox>
                               </section>
                               </Details>
                 
                  
    

    </>
  )
}

export default Contryinn
