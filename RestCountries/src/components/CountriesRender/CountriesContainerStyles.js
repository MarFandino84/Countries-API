import styled from "styled-components"
import { Link } from "react-router-dom"

export const CountriesContainerStyles = styled.section`

display: flex;
flex-direction: column;
width: 100vw;
margin: 0.2rem;
justify-content: center;
align-items: center;

@media (min-width: 829px) {
display: grid;
gap: 0.6rem;
grid-template-columns: repeat(4, 1fr);
margin-top: 1rem;

}
`

export const IndividualContainer = styled.article`
display: flex;
flex-direction: column;
border-radius: 12px;
margin-top: 2.5rem;
width: 100%;


 
img {
     max-width: 95%;
     border-radius: 8px;
     aspect-ratio: 16/9;
     object-fit: cover;
     

@media (max-width: 829px) {
      aspect-ratio: 4/2;
 }     
}
h5 {
     
     padding-left: 3rem;
     font-size: 1.5rem;
     font-weight: 700;
     margin: 2rem 0;
}

`
export const Details = styled.ul`
list-style: none;


img {
  width: 100vw;
  object-fit: cover;
  aspect-ratio: 16/9;
}
section {
   display: flex;
   flex-direction: column;

}

li {
     display: flex;
     flex-direction: row;
     margin-top: 1rem;
     
}

h6 {
    font-size: 1.2rem;
    font-weight: 700;
     
     
}
span {
    margin: 0 0.22rem ;
    font-size: 1.1rem;
    font-weight: 400;
     
}
div {
      font-size: 1.5rem;
      text-align: center;
      box-shadow: 0;
      border: 1.5px solid black;
      padding: 1.2rem;
      margin-left: 1rem;
}


`
export const LinkStyled = styled(Link)`
color: black;
text-decoration: none;

`