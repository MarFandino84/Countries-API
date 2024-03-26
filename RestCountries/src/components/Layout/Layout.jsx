import React from 'react'
import styled from 'styled-components'
import Head from '../Head/Head'


const LayoutStyles = styled.main`
width: 100vw;
min-height: calc(100vh - 22px);
display: flex ;
flex-direction: column;

`


const Layout = ({children}) => {
  return (
    <>
      <Head />
      <LayoutStyles>{children}</LayoutStyles>
    </>
  )
}

export default Layout
