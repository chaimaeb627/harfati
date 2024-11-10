import React from 'react';
import styled from 'styled-components';
 

const Partie9 = () => {
  return (
    <Section>
      <ImageContainer>
        <img src="./videos/2019.png" alt="Consultation" />
      </ImageContainer>
      <Content>
        <Subtitle>Consultez Nous</Subtitle>
        <Title>
        Discutons ensemble de solutions pour  <span>vos projets artisanaux</span>
        </Title>
        <Button>Contactez Nous</Button>
      </Content>
    </Section>
  );
};

export default Partie9;

// Styles

const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  background-color: #f9f9ff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  padding: 30px;
  
  
  img {
    width: 80%;
    padding-left:20px;
    border-radius: 20px;
    object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 30px;
  text-align: left;
`;

const Subtitle = styled.h4`
  font-size: 1rem;
  color: #6c63ff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;

  span {
    color: #6c63ff;
  }
`;

const Button = styled.button`
  background-color: #6c63ff;
  color: #fff;
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;

  &:hover {
    background-color: #5a54d8;
  }

  &:before {
    content: "➔";
    font-size: 1.2rem;
    color: #fff;
  }
`;
