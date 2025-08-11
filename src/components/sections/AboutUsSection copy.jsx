import React from "react";
import styled from "styled-components";
import { MainTitle, Text } from "../common/texts";
import { Container } from "../ui/container.styles";

// الحاوية الرئيسية
const Slide = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  color: #333333;
  font-family: "Cairo", sans-serif;
  direction: rtl;
`;

// الهيدر
const Header = styled.header`
  padding: 60px 0 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 20px;
`;

// قسم المقدمة
const Intro = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  font-size: 20px;
  line-height: 1.6;
`;

// حاوية العدادات
const CountersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const Counter = styled.div`
  background-color: #ffffff;
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 30px;
  margin: 0 20px;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CounterNumber = styled.div`
  font-size: 60px;
  font-weight: 500;
  font-family: sans-serif;
  color: var(--primary);
  /* margin-bottom: 10px; */
`;

const CounterLabel = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

// قسم المعلومات الإضافية
const AdditionalInfo = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
`;

// زر التواصل
const ContactButton = styled.a`
  display: block;
  width: 200px;
  margin: 40px auto;
  padding: 15px 0;
  background-color: var(--primary);
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55a2b;
  }
`;

// الفوتر
const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: #777777;
`;
const StyledAboutUs = styled(Container)`
  .description {
    width: 80%;
    margin: 0 auto;
    text-align: justify;
    text-align-last: center;
  }
`;
const AboutUsSection = () => {
  return (
    <StyledAboutUs>
      <Header>
        <MainTitle>من نحن</MainTitle>
      </Header>

      <Text className="description">
        نحن شركة رائدة في مجال البناء والتشييد، نعمل بتفانٍ واحترافية لتقديم
        حلول بناء مبتكرة وعالية الجودة. منذ تأسيسنا، ونحن نلتزم بأعلى معايير
        الجودة والسلامة في جميع مشاريعنا، سواء كانت سكنية أو تجارية أو صناعية.
        فريقنا من المهندسين والفنيين ذوي الخبرة يعمل جاهداً لتحقيق رؤية عملائنا
        وتحويل أحلامهم إلى واقع ملموس.
      </Text>

      <CountersContainer>
        <Counter>
          <CounterNumber>25+</CounterNumber>
          <Text>سنوات الخبرة</Text>
        </Counter>
        <Counter>
          <CounterNumber>500+</CounterNumber>
          <Text>الأعمال المكتملة</Text>
        </Counter>
      </CountersContainer>

      <Text className="description">
        تتميز شركتنا بالالتزام بالمواعيد النهائية والجودة الفائقة والابتكار في
        كل مشروع نقوم به. نؤمن بأن النجاح يتحقق من خلال الشراكة القوية مع
        عملائنا وتفهم احتياجاتهم بشكل كامل.
      </Text>
    </StyledAboutUs>
  );
};

export default AboutUsSection;
