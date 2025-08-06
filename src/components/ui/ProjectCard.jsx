import React from "react";
import styled from "styled-components";
import { LigntText, SubTitle, Text } from "../common/texts";

const StyledProjectCard = styled.div`
  /* background: rgba(255, 140, 0, 0.1); */
  box-shadow: var(--card-shadow);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 140, 0, 0.3);
  position: relative;
  display: flex;
  /* min-height: 480px; */
  flex-direction: column;
  &:hover {
    /* transform: scale(1.05); */
    /* box-shadow: 0 20px 40px rgba(255, 140, 0, 0.1); */
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
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  justify-content: space-between;
  flex: 1;
`;

const ProjectCard = ({
  icon,
  title,
  description,
  details,
  image,
  ...props
}) => {
  return (
    <StyledProjectCard {...props}>
      {image ? (
        <ProjectImage
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        />
      ) : (
        <ProjectImage>{icon}</ProjectImage>
      )}
      <ProjectInfo>
        <SubTitle>{title}</SubTitle>
        <Text>{description}</Text>
        {details && (
          // <ProjectDetails dangerouslySetInnerHTML={{ __html: details }} />
          <LigntText>{details}</LigntText>
        )}
      </ProjectInfo>
    </StyledProjectCard>
  );
};

export default ProjectCard;
