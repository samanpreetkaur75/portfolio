import React from 'react';
import styled from 'styled-components';
import { Text } from '@leopoldxing/react-component-library';
import { setups } from '../data';

const SetupSection = styled.section`
  background: linear-gradient(145deg, #f1f3f6, #e3e8ef);
  padding: 4rem 2rem;
  color: #2c3e50;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #34495e;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

const SetupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const SetupCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const SetupInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const SetupImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 4px solid #3498db;
`;

const SetupInfo = styled.div`
  padding: 1.5rem;
  background: #3498db;
  color: #ffffff;
  text-align: left;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  &:hover {
    background: #2980b9;
  }
`;

const SetupTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
`;

const SetupDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #f3f3f3;
`;

export default function DeveloperSetup() {
  return (
    <SetupSection id="setup">
      <Container>
        <Header>
          <h1>My Developer Setup</h1>
        </Header>
        <SetupGrid>
          {setups.map((setup) => (
            <SetupCard key={setup.image}>
              <SetupInner>
                <SetupImage alt={setup.name} src={setup.image} />
                <SetupInfo>
                  <SetupTitle>{setup.name}</SetupTitle>
                  <SetupDescription>{setup.description}</SetupDescription>
                </SetupInfo>
              </SetupInner>
            </SetupCard>
          ))}
        </SetupGrid>
      </Container>
    </SetupSection>
  );
}
