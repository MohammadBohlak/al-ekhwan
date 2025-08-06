import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: var(--big-text);
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
    height: 2px;
    background: linear-gradient(45deg, #ff8c00, #ff6600);
  }
`;
export const SubTitle = styled.h2`
  font-size: var(--normal-text);
  /* margin-bottom: 1rem; */
  color: #000;
  color: #ff8c00;
`;
export const Text = styled.div`
  font-size: var(--small-text);
  color: #000;
`;
export const LigntText = styled.div`
  font-size: var(--min-text);
  color: #555;
`;
