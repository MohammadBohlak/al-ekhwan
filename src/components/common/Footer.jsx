import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #111, #222);
  text-align: center;
  padding: 2rem;
  border-top: 2px solid #ff8c00;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 الأخوان للإنشاءات | ALAKHWAN For Constructions. جميع الحقوق محفوظة.</p>
      <p>بناء أحلامكم بجودة وإتقان</p>
    </FooterContainer>
  );
};

export default Footer;