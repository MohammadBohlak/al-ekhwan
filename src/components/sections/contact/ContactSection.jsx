import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container } from "../../ui/container.styles";
import { LightText, MainTitle } from "../../common/texts";
import {
  sectionAnimation,
  titleAnimation,
} from "../../../animations/animations";
import {
  ContactFormWrapper,
  ContactGrid,
  ErrorText,
  FormBox,
  FormGroup,
  FormInput,
  FormLabel,
  FormTextarea,
  FormTitle,
  SubmitButton,
} from "./contact.styles";
import axios from "axios";

const LoaderMsg = styled.div`
  /* HTML: <div class="loader"></div> */
  width: 30px;
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 15deg, #0000, #000);
  animation: l26 1s infinite steps(12);
  &,
  &::before,
  &::after {
    background: radial-gradient(closest-side at 50% 12.5%, white 96%, #0000) 50%
        0/20% 80% repeat-y,
      radial-gradient(closest-side at 12.5% 50%, white 96%, #0000) 0 50%/80% 20%
        repeat-x;
  }
  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    transform: rotate(30deg);
  }
  &::after {
    transform: rotate(60deg);
  }

  @keyframes l26 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
const ContactSection = () => {
  // القيم الابتدائية للنموذج
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // مخطط التحقق باستخدام Yup مع رسائل عربية
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب").min(2, "الاسم قصير جدًا"),
    email: Yup.string()
      .required("البريد الإلكتروني مطلوب")
      .email("الرجاء إدخال بريد إلكتروني صحيح"),
    message: Yup.string()
      .required("الرسالة مطلوبة")
      .min(10, "يجب أن تحتوي الرسالة على 10 أحرف على الأقل"),
  });

  // دالة الإرسال (يمكن تعديلها لاستدعاء API)
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("Form data:", values);
    setSubmitting(true);
    // resetForm();
    axios
      .post("https://jaberissa.pythonanywhere.com/api/contact/", values)
      .then((res) => {
        console.log(res.data);
        setSubmitting(false);
      });
  };

  return (
    <Container id="contact">
      <MainTitle {...titleAnimation}>تواصل معنا</MainTitle>
      <ContactGrid>
        <ContactFormWrapper {...sectionAnimation}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <Form>
                <FormBox>
                  <FormTitle>ارسل لنا رسالة</FormTitle>

                  <FormGroup>
                    <FormLabel htmlFor="name">الاسم</FormLabel>
                    <FormInput
                      id="name"
                      name="name"
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <ErrorText color="red">{errors.name}</ErrorText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="email">البريد الإلكتروني</FormLabel>
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <ErrorText>{errors.email}</ErrorText>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="message">الرسالة</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                      rows="5"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message && (
                      <ErrorText>{errors.message}</ErrorText>
                    )}
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <LoaderMsg /> : "إرسال الرسالة"}
                  </SubmitButton>
                </FormBox>
              </Form>
            )}
          </Formik>
        </ContactFormWrapper>
      </ContactGrid>
    </Container>
  );
};

export default ContactSection;
