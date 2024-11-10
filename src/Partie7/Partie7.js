import React from 'react';
import styled from 'styled-components';

const Partie7 = () => {
  return (
    <Section>
      <Content>
        <Heading>POURQUOI NOUS CHOISIR</Heading>
        <Title>
          Nous Valorisons Votre Art <br />
          Des Services Professionnels pour <span>les Artisans</span>
        </Title>
        <Description>
          Rejoignez une communauté d’artisans passionnés et bénéficiez d’une plateforme dédiée pour faire briller vos talents et augmenter votre visibilité.
        </Description>
        <Features>
          <Feature> Expertise en Métiers d'Art</Feature>
          <Feature> Matériaux de Haute Qualité</Feature>
          <Feature> Assistance 24/7</Feature>
          <Feature>Communauté de Professionnels</Feature>
          <Feature> Amélioration Continue des Compétences</Feature>
          <Feature> Solutions Simples et Efficaces</Feature>
        </Features>
        <DiscoverButton>Inscrivez vous en Tant qu'Artisan </DiscoverButton>
      </Content>
      <Image>
        <img src="./videos/1789.png" alt="Presentation" />
      </Image>
    </Section>
  );
};

export default Partie7;

// Styled components
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
  background-color: #f8faff;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Heading = styled.h2`
  color: #6c63ff;
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;

  span {
    color: #6c63ff;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const Feature = styled.div`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;

  &:before {
    content: "✔";
    color: #6c63ff;
    margin-right: 10px;
  }
`;

const DiscoverButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  margin-left:50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 40px;
  transition: background 0.3s;

  &:hover {
    background-color: #5a54d8;
  }
`;

const Image = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 130%;
    height: 130%;
    background: linear-gradient(135deg, #6c63ff, #b3aaff);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  img {
    position: relative;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    z-index: 2;
    object-fit: cover;
  }
`;
