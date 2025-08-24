import logo from "../../../assets/images/logo_without_background2.png";
import { LightText, Text } from "../../common/texts";
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import {
  ContactIcon,
  ContactItem,
  ContactItems,
  FooterBody,
  FooterBottom,
  FooterContainer,
  FooterItem,
  FooterItemTitle,
  FooterLink,
  FooterLinks,
  FooterLogo,
  SocialLink,
  SocialLinks,
} from "./footer.styles";
import { MdEmail, MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const contactInfo = [
  {
    icon: <FaPhone />,
    title: "الهاتف",
    details: "+963962447416",
    isPhone: true,
  },
  {
    icon: <MdEmail />,
    title: "البريد الإلكتروني",
    details: "info@Alakhwanengineering.com",
    isEmail: true,
  },
  {
    icon: <FaLocationDot />,
    title: "العنوان",
    details: "حمص , الدبلان شارع العراب ",
  },
  {
    icon: <MdOutlineAccessTimeFilled />,
    title: "ساعات العمل",
    details: "السبت - الخميس 8:00 ص - 6:00 م",
  },
];

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterBody>
          <FooterItem>
            <FooterLogo src={logo} />
            <Text className="text-logo">
              نقدم حلولاً بنائية متكاملة ومبتكرة تلبي احتياجات عملائنا بأعلى
              معايير الجودة والاحترافية.
            </Text>
            <SocialLinks>
              <SocialLink href="https://www.facebook.com">
                <FaFacebookF />
              </SocialLink>

              <SocialLink href="https://www.instagram.com">
                <FaInstagram />
              </SocialLink>

              <SocialLink href="https://wa.me/963962447416">
                <FaWhatsapp />
              </SocialLink>
            </SocialLinks>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>الأقسام</FooterItemTitle>
            <FooterLinks>
              <FooterLink href="#home">الرئيسية</FooterLink>
              <FooterLink href="#services">خدماتنا</FooterLink>
              <FooterLink href="#projects">مشاريعنا</FooterLink>
              <FooterLink href="#contact">اتصل بنا</FooterLink>
            </FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>تواصل معنا</FooterItemTitle>
            <FooterLinks>
              <ContactItems>
                {contactInfo.map((item, idx) => (
                  <ContactItem key={idx}>
                    <ContactIcon>{item.icon}</ContactIcon>
                    {item.isPhone || item.isEmail ? (
                      <>
                        <FooterLink
                          href={`${
                            item.isPhone
                              ? `tel:${item.details}`
                              : `mailto:${item.details}`
                          }`}
                          style={{
                            direction: "ltr",
                            marginBottom: "0",
                            color: "black",
                          }}
                        >
                          {item.details}
                        </FooterLink>
                      </>
                    ) : (
                      <>
                        <Text>{item.details}</Text>
                      </>
                    )}
                  </ContactItem>
                ))}
              </ContactItems>
            </FooterLinks>
          </FooterItem>
        </FooterBody>
      </FooterContainer>
      <FooterBottom>
        <LightText>
          &copy; مجموعة الأخوان للاعمال الهندسية. جميع الحقوق محفوظة 2025
        </LightText>
        <LightText>
          تم التطوير بواسطة <a href="https://hamzaekhwan.com/">Hamza ekhwan</a>
        </LightText>
      </FooterBottom>
    </>
  );
};

export default Footer;
