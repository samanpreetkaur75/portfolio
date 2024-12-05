import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: linear-gradient(90deg, #1abc9c, #16a085);
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

const Container = styled.div`
  max-width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 0 1rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    background: #ffffff;
    color: #1abc9c;
    transform: translateY(-4px);
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #1abc9c;
    border-radius: 2px;
  }
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 1px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ecf0f1;
  }
`;

function Navbar() {
  return (
    <StyledHeader>
      <Container>
        <Logo href="#about">My Portfolio</Logo>
        <Navigation>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <NavLink href="#setup">Set up</NavLink>
        </Navigation>
      </Container>
    </StyledHeader>
  );
}

export default Navbar;
