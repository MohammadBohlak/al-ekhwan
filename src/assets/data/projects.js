// import darJellaqImg from './images/dar_jellaq_2.JPG';
import darJellaqImg from "../images/dar_jellaq_2.JPG";
// import salmaImg from '../images/salma.JPG';
import salmaImg from "../images/salma.jpg";
import almatinImg from "../images/almatin.JPG";
// import starchImg from '../images/starch.JPG';
import starchImg from "../images/starch.JPG";
import baticImg from "../images/batic.JPG";
import eng from "../../assets/images/eng.jpg";
import logoAlmatin from "../images/logo_almatin.png";
import logoBatic from "../images/batic-logo.png";
import logoSalma from "../images/Salma-Oil-Logo.png";
import logoDarJellaq from "../images/dar_jellaq-logo.png";
import logoJood from "../images/jood-logo.png";
import logoRasco from "../images/rasco-logo.png";
import {
  FaBuilding,
  FaHome,
  FaIndustry,
  FaPhone,
  FaRoad,
} from "react-icons/fa";
import {
  MdArchitecture,
  MdDesignServices,
  MdEmail,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import { TiClipboard } from "react-icons/ti";
import { GiBrickWall } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

// import logoClient7 from '../images/client7_logo.png';
// import logoClient8 from '../images/client8_logo.png';
// import logoClient9 from '../images/client9_logo.png';
// import logoClient10 from '../images/client10_logo.png';

// import team1 from '../images/team1.jpg';
// import team2 from '../images/team2.jpg';
// import team3 from '../images/team3.jpg';

// export const projects = [
//   {
//     name: "مطبعة دار جلَّق",
//     image: require('./images/dar_jellaq_2.JPG')
//   },
//   {
//     name: "سلمى لصناعة الزيوت",
//     image: require('./images/salma.JPG')
//   },
//   {
//     name: "مجموعة المتين",
//     image: require('./images/almatin.JPG')
//   },
//   {
//     name: "ستارش لصناعة النشاء",
//     image: require('./images/starch.JPG')
//   },
//   {
//     name: "الباتيك لصناعة البيتون",
//     image: require('./images/batic.JPG')
//   }
// ];

// المشاريع
export const projects = [
  { id: 0, name: "مطبعة دار جلَّق", image: darJellaqImg },
  { id: 1, name: "سلمى لصناعة الزيوت", image: salmaImg },
  { id: 2, name: "مجموعة المتين", image: almatinImg },
  { id: 3, name: "ستارش لصناعة النشاء", image: starchImg },
  { id: 4, name: "الباتيك لصناعة البيتون", image: baticImg },
];
export const services = [
  {
    icon: <FaHome />,
    title: "المباني السكنية",
    description:
      "تصميم وبناء المباني السكنية بأحدث المعايير العالمية وأفضل المواد المحلية والمستوردة",
  },
  {
    icon: <FaBuilding />,
    title: "المباني التجارية",
    description:
      "إنشاء المجمعات التجارية والمكاتب والمصانع بتصاميم عصرية ومواصفات تقنية متقدمة",
  },
  {
    icon: <TbTools />,
    title: "البنية التحتية",
    description:
      "تنفيذ مشاريع الطرق والجسور وشبكات المياه والصرف الصحي بجودة عالية",
  },
  {
    icon: <GiBrickWall />,
    title: "التشطيبات",
    description:
      "أعمال التشطيبات الداخلية والخارجية بأحدث التقنيات وأجمل التصاميم",
  },
  {
    icon: <TiClipboard />,
    title: "إدارة المشاريع",
    description:
      "إدارة شاملة للمشاريع من التخطيط حتى التسليم مع ضمان الجودة والمواعيد",
  },
  {
    icon: <MdArchitecture />,
    title: "التصميم الهندسي",
    description:
      "خدمات التصميم المعماري والإنشائي بأحدث البرامج والتقنيات الهندسية",
  },
];

export const featuredProjects = [
  {
    icon: "🏘️",
    title: "مجمع الأخوان السكني",
    description:
      "مشروع سكني متكامل يضم 150 وحدة سكنية بمساحات متنوعة ومرافق حديثة",
    details: "المساحة: 50,000 م² | الموقع: شمال المدينة",
  },
  {
    icon: "🏢",
    title: "برج الأخوان التجاري",
    description: "برج تجاري حديث من 20 طابق يضم مكاتب ومحلات تجارية ومطاعم",
    details: "الارتفاع: 80 متر | المساحة: 25,000 م²",
  },
  {
    icon: "🏭",
    title: "المجمع الصناعي",
    description: "مجمع صناعي متطور يضم مصانع ومستودعات بمواصفات عالمية",
    details: "المساحة: 100,000 م² | الموقع: المنطقة الصناعية",
  },
  {
    icon: "🏥",
    title: "مستشفى الأخوان",
    description: "مستشفى حديث بسعة 200 سرير ومجهز بأحدث المعدات الطبية",
    details: "المساحة: 30,000 م² | عدد الطوابق: 8",
  },
  {
    icon: "🏫",
    title: "مجمع الأخوان التعليمي",
    description: "مجمع تعليمي شامل يضم مدارس وجامعة بتجهيزات تقنية متطورة",
    details: "المساحة: 80,000 م² | الطلاب: 5000",
  },
  {
    icon: "🛣️",
    title: "طريق الأخوان السريع",
    description: "طريق سريع بطول 50 كم يربط بين المدن مع جسور وأنفاق حديثة",
    details: "الطول: 50 كم | عدد المسارات: 6",
  },
];

// export const clients = [
//   { logo: require('./images/logo_almatin.png'), url: "https://client1.com" },
//   { logo: require('./images/batic-logo.png'), url: "https://client2.com" },
//   { logo: require('./images/Salma-Oil-Logo.png'), url: "https://client3.com" },
//   { logo: require('./images/dar_jellaq-logo.png'), url: "https://client4.com" },
//   { logo: require('./images/jood-logo.png'), url: "https://client5.com" },
//   { logo: require('./images/rasco-logo.png'), url: "https://client6.com" },
//   { logo: require('./images/client7_logo.png'), url: "https://client7.com" },
//   { logo: require('./images/client8_logo.png'), url: "https://client8.com" },
//   { logo: require('./images/client9_logo.png'), url: "https://client9.com" },
//   { logo: require('./images/client10_logo.png'), url: "https://client10.com" }
// ];

// العملاء
export const clients = [
  { logo: logoAlmatin, url: "https://client1.com" },
  { logo: logoBatic, url: "https://client2.com" },
  { logo: logoSalma, url: "https://client3.com" },
  { logo: logoDarJellaq, url: "https://client4.com" },
  { logo: logoJood, url: "https://client5.com" },
  { logo: logoRasco, url: "https://client6.com" },
  // { logo: logoRasco, url: "https://client6.com" },
  // { logo: logoRasco, url: "https://client6.com" },
  // { logo: logoRasco, url: "https://client6.com" },
  // { logo: logoRasco, url: "https://client6.com" },
  // { logo: logoRasco, url: "https://client6.com" },
  // { logo: logoRasco, url: "https://client6.com" },
  // { logo: logoClient7, url: "https://client7.com" },
  // { logo: logoClient8, url: "https://client8.com" },
  // { logo: logoClient9, url: "https://client9.com" },
  // { logo: logoClient10, url: "https://client10.com" }
];

// export const teamMembers = [
//   {
//     image: require('./images/team1.jpg'),
//     name: "المهندس أحمد العلي",
//     position: "مدير المشاريع"
//   },
//   {
//     image: require('./images/team2.jpg'),
//     name: "المهندسة سارة يوسف",
//     position: "رئيسة قسم التصميم"
//   },
//   {
//     image: require('./images/team3.jpg'),
//     name: "المهندس خالد حسن",
//     position: "المدير التنفيذي"
//   }
// ];

// أعضاء الفريق
export const teamMembers = [
  { image: eng, name: "المهندس أحمد العلي", position: "مدير المشاريع" },
  { image: eng, name: "المهندسة سارة يوسف", position: "رئيسة قسم التصميم" },
  { image: eng, name: "المهندسة سارة يوسف", position: "رئيسة قسم التصميم" },
  { image: eng, name: "المهندسة سارة يوسف", position: "رئيسة قسم التصميم" },
  { image: eng, name: "المهندسة سارة يوسف", position: "رئيسة قسم التصميم" },
  { image: eng, name: "المهندسة سارة يوسف", position: "رئيسة قسم التصميم" },
  { image: eng, name: "المهندس خالد حسن", position: "المدير التنفيذي" },
  // { image: team1, name: "المهندس أحمد العلي", position: "مدير المشاريع" },
  // { image: team2, name: "المهندسة سارة يوسف", position: "رئيسة قسم التصميم" },
  // { image: team3, name: "المهندس خالد حسن", position: "المدير التنفيذي" }
];
export const contactInfo = [
  {
    icon: <FaPhone />,
    title: "الهاتف",
    details: "+963962447416",
  },
  {
    icon: <MdEmail />,
    title: "البريد الإلكتروني",
    details: "info@alakhwan.com",
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
