import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { MainTitle, Text } from "../common/texts";
import { Container } from "../ui/container.styles";
import { sectionAnimation, titleAnimation } from "../../animations/animations";
import img1 from "../../assets/images/aboutSection/1.jpg";
import img2 from "../../assets/images/aboutSection/2.jpg";
import img3 from "../../assets/images/aboutSection/3.jpg";
import img4 from "../../assets/images/aboutSection/4.jpg";
// ===== Styled Components =====

const Header = styled.header`
  /* padding: 60px 0 30px; */
  text-align: center;
`;

const CountersContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const Counter = styled(motion.div)`
  background-color: #ffffff;
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 30px;
  margin: 0 20px;
  text-align: center;
  width: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CounterNumber = styled.div`
  font-size: 60px;
  font-weight: 500;
  color: var(--primary);
  display: flex;
  /* align-items: baseline; */
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const CounterLabel = styled.div`
  font-size: 22px;
  font-weight: 700;
  /* margin-top: 8px; */
`;

const StyledAboutUs = styled(Container)`
  /*  */
`;

const AboutContenet = styled(motion.div)`
  display: grid;
  /* display: flex; */
  max-height: 500px;
  grid-template-columns: 1fr 1fr;

  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 500px;
    max-height: 2000px;
    justify-content: center;
    gap: 50px;
  }
  @media (max-width: 768px) {
    /* text-align: center; */
    text-align-last: center;
  }
`;
const AboutRight = styled(motion.div)`
  .description {
    /* width: 80%; */
    /* margin: 0 auto; */
    text-align: justify;
    /* text-align-last: center; */
  }
`;
const AboutLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* background-color: gray; */
  /* align-items: start; */
  width: 100%;
  position: relative;
  overflow-x: hidden;

  padding: 30px 0;
  /* padding-top: 20px; */
  scrollbar-width: none;
  @media (max-width: 768px) {
    /* left: 4%; */
  }
`;
const Images = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  transform: scaleX(1.15);
`;

const Image = styled(motion.div)`
  width: 50%;
  height: 100%;
  position: relative;
  /* background-color: black; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &.i1 {
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    left: -7%;
    /* background-color: black; */
    background-image: url(${img1});
  }
  &.i2 {
    clip-path: polygon(0 0%, 100% 0, 70% 100%, 0% 100%);
    left: 8%;
    /* background-color: blue; */
    background-image: url(${img2});
    top: -25px;
  }
  &.i3 {
    left: -7%;
    top: 35px;
    /* background-color: pink; */
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    background-image: url(${img3});
  }
  &.i4 {
    clip-path: polygon(0 0%, 100% 0, 70% 100%, 0% 100%);
    left: 8%;
    top: 10px;
    /* background-color: gray; */
    background-image: url(${img4});
  }
`;
// ===== Component =====

const AboutUsSection = () => {
  // الأهداف التي يمكن تحديثها لاحقًا من السيرفر
  const [targets, setTargets] = useState({ years: 25, projects: 500 });

  // MotionValues للعدادات
  const yearsMV = useMotionValue(0);
  const projectsMV = useMotionValue(0);

  // نحول القيم العائمة إلى أعداد صحيحة
  const roundedYears = useTransform(yearsMV, (v) => Math.floor(v));
  const roundedProjects = useTransform(projectsMV, (v) => Math.floor(v));

  // حالات للاحتفاظ بالعرض النهائي
  const [displayYears, setDisplayYears] = useState(0);
  const [displayProjects, setDisplayProjects] = useState(0);

  // مثال لجلب البيانات من السيرفر (يمكن تفعيله عند الحاجة)
  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch("/api/counters");
    //   const json = await res.json();
    //   setTargets({ years: json.years, projects: json.projects });
    // }
    // fetchData();
  }, []);

  // ربط تغيّرات الـMotionValues بحالات العرض
  useEffect(() => {
    const unsubY = roundedYears.on("change", (v) => setDisplayYears(v));
    const unsubP = roundedProjects.on("change", (v) => setDisplayProjects(v));
    return () => {
      unsubY();
      unsubP();
    };
  }, [roundedYears, roundedProjects]);

  // مرجع وحالة المراقبة للظهور
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  // بدء التحريك عند الظهور
  useEffect(() => {
    if (inView) {
      animate(yearsMV, targets.years, { duration: 2, ease: "easeOut" });
      animate(projectsMV, targets.projects, { duration: 2, ease: "easeOut" });
    }
  }, [inView, targets, yearsMV, projectsMV]);

  return (
    <StyledAboutUs>
      <Header>
        <MainTitle {...titleAnimation}>من نحن</MainTitle>
      </Header>
      <AboutContenet>
        <AboutRight>
          <Text className="description" {...sectionAnimation}>
            نحن شركة رائدة في مجال البناء والتشييد، نعمل بتفانٍ واحترافية لتقديم
            حلول بناء مبتكرة وعالية الجودة. منذ تأسيسنا، ونحن نلتزم بأعلى معايير
            الجودة والسلامة في جميع مشاريعنا، سواء كانت سكنية أو تجارية أو
            صناعية. فريقنا من المهندسين والفنيين ذوي الخبرة يعمل جاهداً لتحقيق
            رؤية عملائنا وتحويل أحلامهم إلى واقع ملموس.
          </Text>

          <CountersContainer ref={ref}>
            <Counter {...sectionAnimation}>
              <CounterNumber>
                {displayYears}
                <motion.span style={{ fontSize: "40px" }}>+</motion.span>
              </CounterNumber>
              <Text>سنوات الخبرة</Text>
            </Counter>

            <Counter {...sectionAnimation}>
              <CounterNumber>
                {displayProjects}
                <motion.span style={{ fontSize: "40px" }}>+</motion.span>
              </CounterNumber>
              <Text>الأعمال المكتملة</Text>
            </Counter>
          </CountersContainer>

          <Text className="description" {...sectionAnimation}>
            تتميز شركتنا بالالتزام بالمواعيد النهائية والجودة الفائقة والابتكار
            في كل مشروع نقوم به. نؤمن بأن النجاح يتحقق من خلال الشراكة القوية مع
            عملائنا وتفهم احتياجاتهم بشكل كامل.
          </Text>
        </AboutRight>
        <AboutLeft>
          <Images>
            <Image {...sectionAnimation} className="i1" />
            <Image {...sectionAnimation} className="i2" />
          </Images>
          <Images>
            {" "}
            <Image {...sectionAnimation} className="i3" />
            <Image {...sectionAnimation} className="i4" />
          </Images>
        </AboutLeft>
      </AboutContenet>
    </StyledAboutUs>
  );
};

export default AboutUsSection;
