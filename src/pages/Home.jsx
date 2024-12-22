import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

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
`;

const Home = () => {
  return <Container>
    <Headline>explore popular posts in community!
        <Span>⦿Generated with AI⦿</Span>
    </Headline>
   <SearchBar/>
</Container>
};

export default Home
