import styled from "styled-components";


export const ButtonStyle = styled.button`
text-align: center;
box-shadow: 1px gray;
border-radius: 5px;
height: 2.4rem;
width: 7rem;
display: flex;
align-items: center;
justify-content: center;
position: relative;
margin-bottom: 8rem;
`


export const Details = styled.article`
display: flex;
justify-content: space-evenly;
max-width: 95vw;


@media (max-width: 830px) {
display: flex;
flex-direction:column;



}

section {
max-width: 45vw;

display: flex;
margin-right: 2rem;
flex-direction: column;


@media (max-width: 830px) {
display: flex;
flex-direction:column;
width: 100vw;
   
}

img {
  
  max-width: 45vw;
  object-fit: cover;
  aspect-ratio: 16/9;

@media (min-width: 830px) {
width: 89vw;
object-fit: cover;
aspect-ratio: 16/9;

}
     
}}`

export const ArticleContainer = styled.div`
display: flex;
max-height: 80%;

@media (max-width: 830px) {
flex-direction: column;
display: flex;
}

`


export const ArticleSection = styled.section` 
   display: flex;
   flex-direction: column;



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
     
}`

export const BorderBox = styled.div`
margin-top: 1rem;


div {     
      font-size: 1.5rem;
      text-align: center;
      box-shadow: 1px var(--VeryLightGray);
      border: 1.5px solid black;
      padding: 1.2rem;
      margin-left: 1rem;
      flex-wrap: wrap;
}

ul {
     max-width: 80vw;
     display: flex;
     flex-direction: row;
     flex-shrink: 1;
     margin-top: 1rem;
     list-style: none;
}

`
