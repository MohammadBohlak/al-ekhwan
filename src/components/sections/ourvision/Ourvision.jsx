import { FaEye } from "react-icons/fa";
import { MainTitle } from "../../common/texts";
import img from "../../../assets/images/ourvision/technologyEdit.png";
import {
  sectionAnimation,
  titleAnimation,
} from "../../../animations/animations";
import {
  Highlight,
  ImageFrame,
  Paragraph,
  Shape1,
  Shape2,
  TextTitle,
  VisionContent,
  VisionHeader,
  VisionImage,
  VisionSection,
  VisionText,
} from "./ourvision.styles";

const Ourvision = () => (
  <>
    <VisionSection
      initial={{ backgroundColor: "transparent" }}
      whileInView={{ backgroundColor: "#ff8c00" }}
      transition={{ duration: 1 }}
    >
      <VisionHeader>
        <MainTitle $color="#ffffff" {...titleAnimation}>
          رؤيتنا
        </MainTitle>
      </VisionHeader>

      <VisionContent>
        <VisionImage>
          <ImageFrame>
            <img
              // src="https://sfile.chatglm.cn/images-ppt/20b17a93db09.jpg"
              src={img}
              alt="موقع بناء احترافي"
            />
          </ImageFrame>
          <Shape1 />
          <Shape2 />
        </VisionImage>

        <VisionText>
          <TextTitle {...sectionAnimation}>
            <FaEye /> رؤيتنا المستقبلية
          </TextTitle>
          <Paragraph {...sectionAnimation}>
            نطمح لأن نكون <Highlight>الشركة الرائدة</Highlight> في مجال البناء
            والتشييد على مستوى المنطقة.
          </Paragraph>
          <Paragraph {...sectionAnimation}>
            نسعى لتحقيق التميز من خلال <Highlight>الابتكار المستمر</Highlight>{" "}
            وتطبيق أحدث التقنيات في جميع مشاريعنا.
          </Paragraph>
          <Paragraph {...sectionAnimation}>
            نلتزم بأعلى معايير <Highlight>الجودة والسلامة</Highlight> واستخدام
            مواد صديقة للبيئة لضمان استدامة مشاريعنا.
          </Paragraph>
          <Paragraph {...sectionAnimation}>
            رؤيتنا تتمثل في بناء مجتمعات أكثر تطوراً وتحسين جودة الحياة من خلال
            مشاريع عمرانية متميزة.
          </Paragraph>
        </VisionText>
      </VisionContent>
    </VisionSection>
  </>
);

export default Ourvision;
