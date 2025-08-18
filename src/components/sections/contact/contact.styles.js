import styled from "styled-components";
import { SubTitle } from "../../common/texts";
import { motion } from "motion/react";

export const ContactGrid = styled.div`
  /* display: grid; */
  grid-template-columns: 0.8fr 1fr;
  gap: 2rem;
  row-gap: 3rem;
  margin-top: 3rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactFormWrapper = styled(motion.form)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 992px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 567px) {
    width: 100%;
  }
`;

export const FormBox = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
  border-top: 4px solid var(--primary);
`;

export const FormTitle = styled(SubTitle)`
  /* font-size: 24px; */
  /* font-weight: 700; */
  color: #212121;
  margin-bottom: 20px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--primary);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: var(--small-text);
  font-weight: 500;
  color: #495057;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: var(--min-text);
  font-family: "Tajawal", sans-serif;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background-color: #f8f9fa;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff7043;
    box-shadow: 0 0 0 2px rgba(255, 112, 67, 0.1);
    background-color: #ffffff;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  font-size: var(--min-text);
  font-family: "Tajawal", sans-serif;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background-color: #f8f9fa;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  resize: none;
  &:focus {
    outline: none;
    border-color: #ff7043;
    box-shadow: 0 0 0 2px rgba(255, 112, 67, 0.1);
    background-color: #ffffff;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 12px 20px;
  font-size: var(--small-text);
  font-weight: bold;
  color: #ffffff;
  background-color: #ff7043;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #ff7043;

  &:hover {
    background-color: #fff;
    color: #ff7043;
  }
`;
