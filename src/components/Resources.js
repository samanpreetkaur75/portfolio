import React from 'react';
import { Card, Img, Text } from '@leopoldxing/react-component-library';
import { resources } from '../data';
import styled from 'styled-components';

const ResourcesSection = styled.section`
  background: linear-gradient(180deg, #f0f8ff, #e6e6fa);
  padding: 3rem 0;
  color: #2d2d2d;
  margin-top: 3rem;
`;

const Container = styled.div`
  max-width: 85%;
  margin: auto;
  margin-bottom: 3rem;
  border-radius: 12px;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 2.4rem;
    color: #333333;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #555555;
    margin-bottom: 1.5rem;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
`;

const CustomCard = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    background: #f7f7f7;
  }

  .card-content {
    padding: 1.5rem;
    text-align: center;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333333;
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      color: #666666;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }

    button {
      background: #4a90e2;
      color: #ffffff;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: background 0.3s ease, transform 0.2s ease;

      &:hover {
        background: #367bb5;
        transform: scale(1.05);
      }
    }
  }
`;

export default function Resources() {
  return (
    <ResourcesSection id="resources">
      <Container>
        <Header>
          <h1>Resources</h1>
          <p>Explore some of the tools and materials I frequently use.</p>
        </Header>
        <ResourcesGrid>
          {resources.map((resource, index) => (
            <CustomCard key={index}>
              <Card
                imageurl={resource.image}
                title={resource.title}
                content={resource.summary}
                buttonText="Learn More"
                onButtonClick={() => window.open(resource.link, '_blank')}
              />
            </CustomCard>
          ))}
        </ResourcesGrid>
      </Container>
    </ResourcesSection>
  );
}
