import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
   flex: 1;
   padding: 16px 20px;
   display: flex;
   flex-direction: column;
   gap: 9%;
   justify-content: center;
`;
const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
    color: ${({theme}) => theme.text_primary};
`;
const Desc = styled.div`
    font-size: 17px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary};
`;
const Body = styled.div`
     display: flex;
     flex-direction: column;
     gap: 18px;
     font-size: 12px;
     font-weight: 400;
     color: ${({theme}) => theme.text_secondary};
`;
const Actions = styled.div`
      flex: 1;
      display: flex;
      gap: 8px;
`;

const GenerateImageForm = () => {
  return <Form>
    <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>
            Write your prompt according to the image you want
        </Desc>
    </Top>
    <Body>body</Body>
   <Actions>action</Actions> 
  </Form>
}

export default GenerateImageForm
