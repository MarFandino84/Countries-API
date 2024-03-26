import React from "react"
import { BrowserRouter,
    Routes as CountryRoutesDOM,
    Route } from "react-router-dom" 
import Layout from "../components/Layout/Layout"
import Contryinn from "../components/CountryInn/Contryinn"
import Head from "../components/Head/Head"
import Search from "../components/Search/Search"
import CountriesContainer from "../components/CountriesRender/CountriesContainer"


const Routes = () => {
   
    return (
    <BrowserRouter>
       <Layout>
    
        <CountryRoutesDOM>
            
        <Route path="/"  >
                <Route index element={<Search />} />
                <Route path=":name" element={<Contryinn />} />
        </ Route>


        </CountryRoutesDOM>
    
       </Layout>                 
      
    
    </BrowserRouter>
)}

export default Routes