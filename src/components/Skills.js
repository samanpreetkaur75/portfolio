import React from 'react';
import styled from 'styled-components';
import { Text } from '@leopoldxing/react-component-library';
import { skills } from '../data';

const SkillsSection = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #e0e7ff, #f8f9fa);
  color: #333333;
  margin-top: 4rem;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  padding: 2rem;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #777777;
    max-width: 80%;
    margin: 0 auto;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const SkillsCard = styled.div`
  background-color: #4a90e2;
  color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    background-color: #367bb5;
  }

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const SkillText = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #ffffff;
`;

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <Container>
        <Header>
          <h1>My Skills</h1>
          <p>Technologies and tools I have experience with:</p>
        </Header>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillsCard key={index}>
              <SkillText>{skill}</SkillText>
            </SkillsCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}
