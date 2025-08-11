import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { MainTitle, Text } from "../common/texts";
import { Container } from "../ui/container.styles";
import { sectionAnimation, titleAnimation } from "../../animations/animations";

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
  width: 300px;
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
  .description {
    width: 80%;
    margin: 0 auto;
    text-align: justify;
    text-align-last: center;
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

      <motion.div>
        <Text className="description" {...sectionAnimation}>
          نحن شركة رائدة في مجال البناء والتشييد، نعمل بتفانٍ واحترافية لتقديم
          حلول بناء مبتكرة وعالية الجودة. منذ تأسيسنا، ونحن نلتزم بأعلى معايير
          الجودة والسلامة في جميع مشاريعنا، سواء كانت سكنية أو تجارية أو صناعية.
          فريقنا من المهندسين والفنيين ذوي الخبرة يعمل جاهداً لتحقيق رؤية
          عملائنا وتحويل أحلامهم إلى واقع ملموس.
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
          تتميز شركتنا بالالتزام بالمواعيد النهائية والجودة الفائقة والابتكار في
          كل مشروع نقوم به. نؤمن بأن النجاح يتحقق من خلال الشراكة القوية مع
          عملائنا وتفهم احتياجاتهم بشكل كامل.
        </Text>
      </motion.div>
    </StyledAboutUs>
  );
};

export default AboutUsSection;
