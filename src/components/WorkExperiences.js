import styled from 'styled-components';
import { projects } from '../data';

const ProjectsSection = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #e6f7ff, #f8f9fa);
  color: #333333;
  margin-top: 4rem;
`;

const Container = styled.div`
  max-width: 85%;
  margin: auto;
  padding: 2rem;
  @media (max-width: 768px) {
    max-width: 95%;
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
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 3px solid #1e90ff;
`;

const ProjectInfo = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-top: 3px solid #1e90ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

const ProjectTech = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #1e90ff;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555555;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 0;
`;

export default function WorkExperiences() {
  return (
    <ProjectsSection id="work">
      <Container>
        <Header>
          <h1>Some of My Past Projects</h1>
        </Header>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard href={project.link} key={project.image}>
              <ProjectImage alt={project.title} src={project.image} />
              <ProjectInfo>
                <ProjectTech>{project.tech}</ProjectTech>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}
