import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { MainTitle, Text } from "../../common/texts";
import { Container } from "../../ui/container.styles";
import {
  sectionAnimation,
  titleAnimation,
} from "../../../animations/animations";

import { DataContext } from "../../../App";
import {
  AboutContenet,
  AboutLeft,
  AboutRight,
  Counter,
  CounterNumber,
  CountersContainer,
  Header,
  Image,
  Images,
  StyledAboutUs,
} from "./aboutUs.styles";

// ===== Component =====

const AboutUsSection = () => {
  // الأهداف التي يمكن تحديثها لاحقًا من السيرفر
  const [targets, setTargets] = useState({ years: 30, projects: 500 });

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

  const data = useContext(DataContext);
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
              <Text style={{ fontWeight: "bold" }}>عام من الخبرة</Text>
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
