import React from 'react';
import styled from 'styled-components';

const StyledProjectCard = styled.div`
  background: rgba(255, 140, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 140, 0, 0.3);
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(255, 140, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(45deg, #333, #555);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #ff8c00;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #ff8c00;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #ddd;
  margin-bottom: 0.5rem;
`;

const ProjectDetails = styled.small`
  color: #aaa;
`;

const ProjectCard = ({ icon, title, description, details, image, ...props }) => {
  return (
    <StyledProjectCard {...props}>
      {image ? (
        <ProjectImage style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }} />
      ) : (
        <ProjectImage>{icon}</ProjectImage>
      )}
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        {details && <ProjectDetails dangerouslySetInnerHTML={{ __html: details }} />}
      </ProjectInfo>
    </StyledProjectCard>
  );
};

export default ProjectCard;