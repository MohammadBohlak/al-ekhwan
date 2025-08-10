import React from "react";
import styled, { keyframes } from "styled-components";
import { clients } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";
import { MainTitle } from "../common/texts";

const ClientsSectionContainer = styled.section`
  padding: var(--p-section) 2rem;
  padding-bottom: 0px;
  /* max-width: 1200px; */
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ed9245;
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

const ClientsSlider = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const SlideTrack = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(${(props) => props.$translateX});
    }
    100% {
      transform: translateX(-100%);
    }
  }
  display: flex;
  align-items: center;
  gap: 3rem;
  white-space: nowrap;
  animation: scroll 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const ClientLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 130px;
    height: auto;
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover img {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const ClientsSection = () => {
  const translateX = clients.length * 15;
  return (
    <Container id="clients" className="fade-in section">
      <MainTitle>عملاؤنا المميزون</MainTitle>

      <ClientsSectionContainer>
        <ClientsSlider>
          <SlideTrack $translateX={`${translateX}%`}>
            {clients.map((client, index) => (
              <ClientLink
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={client.logo} alt={`Client ${index + 1}`} />
              </ClientLink>
            ))}
          </SlideTrack>
        </ClientsSlider>
      </ClientsSectionContainer>
    </Container>
  );
};

export default ClientsSection;
