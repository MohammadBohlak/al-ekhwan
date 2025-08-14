import { styled } from "styled-components";
import React from "react";
import { Container } from "../ui/container.styles";
import { MainTitle, Text } from "../common/texts";
import bg from "../../assets/images/ourvision/technology.jpg";
const StyledOurvision = styled(Container)`
  /* background-image: radial-gradient(circle, #ff8c00, #ff6600); */
  background-color: #ff3623;
`;
const OurvisionContent = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  gap: 20px;
`;
const Ourvision = () => {
  return (
    <>
      <StyledOurvision>
        <MainTitle $color="#ffffff">رؤيتنا</MainTitle>
        <OurvisionContent>
          <div>
            <Text $color="#ffffff">
              نسعى لأن نكون في طليعة شركات البناء والهندسة في المنطقة، من خلال
              تقديم حلول إنشائية مبتكرة، مستدامة، وذات جودة عالية. نؤمن بأن
              البناء ليس مجرد تشييد هياكل، بل هو خلق بيئات تلهم وتدوم. رؤيتنا
              تتمثل في بناء مستقبل يرتكز على الثقة، الكفاءة، والتطوير المستمر،
              لنكون الخيار الأول لكل من يبحث عن التميز في عالم الإنشاءات.
            </Text>
          </div>
          <div>
            <img src={bg} />
          </div>
        </OurvisionContent>
      </StyledOurvision>
    </>
  );
};

export default Ourvision;
