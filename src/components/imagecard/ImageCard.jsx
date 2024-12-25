import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from "react-lazy-load-image-component"

const Card = styled.div`
  position : relative;
  display: flex;
  border-radius : 20px;
  box-shadow: 1px 2px 40px 8px ${({theme}) => theme.black + 60};
  cursor: pointer;
  transition: all 0.3 ease; 
  &hover {
  box-shadow: 1px 2px 40px 8px
  }
`;
const HoverOverlay = styled.div`
`;
const Prompt = styled.div`
`;
const Author = styled.div`
`;



const ImageCard = () => {
  return 
    <Card>
      <LazyLoadImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcoffee&psig=AOvVaw2qnRZ7-bVABFiEgjNWhF7d&ust=1735173245588000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiHiJnWwYoDFQAAAAAdAAAAABAE"/>
      <HoverOverlay>
        <Prompt>prompt</Prompt>
        <Author>Harsh</Author>
      </HoverOverlay>
    </Card>  
};

export default ImageCard
