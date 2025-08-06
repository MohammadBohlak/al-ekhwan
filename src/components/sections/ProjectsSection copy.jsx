import React from "react";
import styled from "styled-components";
import ProjectCard from "../ui/ProjectCard";
import { featuredProjects } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";
import { MainTitle } from "../common/texts";

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectsSection = () => {
  return (
    <Container id="projects" className="fade-in section">
      <MainTitle>مشاريعنا المختارة</MainTitle>
      <ProjectsGrid>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            details={project.details}
          />
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default ProjectsSection;
