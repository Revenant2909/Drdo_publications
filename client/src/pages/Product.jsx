import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Publication from '../components/Publication';


const Container = styled.div`

`;
const Product = () => {
  return (
    <Container>
      <Slider/>
      <Publication/>
    </Container>
  )
}

export default Product