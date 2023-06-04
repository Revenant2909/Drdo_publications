import React from 'react'
import styled from 'styled-components'
import Slider from '../components/Slider';
import Filters from '../components/Filters';
import ProductItem from '../components/ProductItem';
import NewsLetter from '../components/NewsLetter';


const Container = styled.div`
    
`;

const Home = () => {
  return (
    <Container>
      <Slider/>
      <Filters/>
      <ProductItem/>
      <NewsLetter/>
      </Container>
  )
}

export default Home