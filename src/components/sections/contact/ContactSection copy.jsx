import styled from "styled-components";
import { Container } from "../../ui/container.styles";
import { LightText, MainTitle, SubTitle } from "../../common/texts";
import {
  sectionAnimation,
  titleAnimation,
} from "../../../animations/animations";
import {
  ContactFormWrapper,
  ContactGrid,
  FormBox,
  FormGroup,
  FormInput,
  FormLabel,
  FormTextarea,
  FormTitle,
  SubmitButton,
} from "./contact.styles";

const ContactSection = () => {
  return (
    <Container id="contact">
      <MainTitle {...titleAnimation}>تواصل معنا</MainTitle>
      <ContactGrid>
        <ContactFormWrapper {...sectionAnimation}>
          <FormBox>
            <FormTitle>ارسل لنا رسالة</FormTitle>

            <FormGroup>
              <FormLabel htmlFor="name">الاسم</FormLabel>
              <FormInput id="name" type="text" placeholder="أدخل اسمك الكامل" />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">البريد الإلكتروني</FormLabel>
              <FormInput
                id="email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">الرسالة</FormLabel>
              <FormTextarea id="message" placeholder="اكتب رسالتك هنا..." />
            </FormGroup>

            <SubmitButton type="submit">إرسال الرسالة</SubmitButton>
          </FormBox>
        </ContactFormWrapper>
      </ContactGrid>
    </Container>
  );
};

export default ContactSection;
