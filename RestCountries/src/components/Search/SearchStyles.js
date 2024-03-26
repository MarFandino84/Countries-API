import styled from "styled-components";


export const Container = styled.div`
max-width: 93vw;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 6px;


@media (max-width: 829px) {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
}

`   
export const Wrapper = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
border-radius: 5px;

@media (max-width: 829px) {
     width: 70vw;
     margin-bottom: 4rem;

}


`

export const SearchBarStyles = styled.input`
border: none;
width: 20.5vw;
height: 4rem;



`
export const FilterByRegionStyles = styled.select`

height: 4rem;
border-radius: 5px;

@media (max-width: 829px) {
     width: 40vw;
}


`