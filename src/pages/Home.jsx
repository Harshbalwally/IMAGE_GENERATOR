import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/imagecard/ImageCard';

const Container = styled.div`
  height : 100%;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768){
     padding: 6px 10px;
     }
`;

const Headline = styled.div`
  font-size : 34px;
  font-weight: 500;
  cplor: ${({theme}) => theme.text_primary};
  display: flex;
  align-items : center;
  flex-direction: column;
     
  @media (max-width: 600px){
  font-size: 22px;
  }
`;
const Span = styled.div`
 font-size : 34px;
  font-weight: 500;
  cplor: ${({theme}) => theme.secondary};

@media (max-width: 600px){
  font-size: 20px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding : 32px 0px;
  display: flex;
  justify-content:center;
`
const CardWrapper = styled.div`
   display: grid;
   gap : 20px;
   @media(min-width: 1200px) {
   grid-template-columns: repeat(4,1fr)
   }
    @media(min-width: 640px) and (max-width: 1199px) {
   grid-template-columns: repeat(3,1fr)
   }
   @media(max-width: 639px) {
   grid-template-columns: repeat(2,1fr)
   }
`;
const Home = () => {
  const item ={
    photo:"",
    author:"",
    prompt:"",
  }
  return <Container>
    <Headline>explore popular posts in community!
        <Span>⦿Generated with AI⦿</Span>
    </Headline>
   <SearchBar/>
   <Wrapper>
    <CardWrapper>
      <ImageCard item={item}/>
   
    </CardWrapper>
   </Wrapper>
</Container>
};

export default Home
