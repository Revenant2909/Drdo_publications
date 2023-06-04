import React from 'react'
import styled from 'styled-components'
import sliderImage1 from "../inner-default-banner.jpg"

const Container = styled.div`
    position: relative;
    width: 100vw;
`;
const Image = styled.img`
    width: 100%;
    height: 20vh;
    background-color: #094683;
    z-index: 1;
    object-fit: cover;
    object-position: 0px -320px ;
    border-top: 1px solid grey;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 50px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  line-height:2
`;
const Text = styled.h1`
    position: relative;
    z-index: 2;
    left: 100px;
    bottom: 50px;
    /* background-image: url(https://giphy.com/gifs/mist-blue-smoke-cJPDsufGbi9lC); */
    background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
    background-size: cover;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-size: 70px;
`;
const Slider = () => {
  return (
    <Container>
        <Image src={sliderImage1} />
        <TextContainer>
        <Text>DRDO Monographs</Text>
        </TextContainer>

    </Container>
  )
}

export default Slider