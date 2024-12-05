import React from 'react';
import styled from 'styled-components';
import { Text, Img, Button } from '@leopoldxing/react-component-library';

const Section = styled.section`
  padding: 3rem 2rem;
  background: #ffffff;
  color: #333;
  max-width: 80%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2rem 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #7f8c8d;
    margin-bottom: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-top: 2rem;
  position: relative;
  max-width: 300px;

  img {
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    height: auto;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export default function BasicInformation() {
  return (
    <Section id="about">
      <Container>
        <Content>
          <Text types="header" bold text="Hi, I'm Samanpreet Kaur" />
          <p>
            Full Stack Web Development student at RRC Polytech with a passion for technology and creating dynamic web solutions. Proficient in Java, React, Python, and PHP, with a strong focus on building efficient and scalable applications.
          </p>
          <div style={{ margin: '1.5rem 0' }}>
            <Button
              primary
              as="a"
              href="#projects"
              text="SEE MY PROJECTS"
              style={{ textDecoration: 'none' }}
            />
          </div>
        </Content>
        <ImageWrapper>
          <Img src="./front.jpg" height="300px" alt="Hero Image" />
        </ImageWrapper>
      </Container>
    </Section>
  );
}
