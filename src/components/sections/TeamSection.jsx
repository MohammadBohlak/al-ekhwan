import React from "react";
import styled from "styled-components";
import Card from "../ui/Card";
import { teamMembers } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";
import { SubTitle, Text } from "../common/texts";

const TeamSectionContainer = styled.section`
  padding: var(--p-section) 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff8c00;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #ff8c00, #ff6600);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const TeamSection = () => {
  return (
    <Container id="team" className="fade-in section">
      <SectionTitle>فريق العمل</SectionTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <TeamImage
              style={{ color: "#000" }}
              src={member.image}
              alt={member.name}
            />
            <SubTitle>{member.name}</SubTitle>
            <Text>{member.position}</Text>
          </Card>
        ))}
      </TeamGrid>
    </Container>
  );
};

export default TeamSection;
