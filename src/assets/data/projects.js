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
    id: 7,
    images: [
      {
        image: "/media/projects/gallery/4.jpg",
      },
      {
        image: "/media/projects/gallery/3.jpg",
      },
      {
        image: "/media/projects/gallery/2.jpg",
      },
      {
        image: "/media/projects/gallery/5.jpg",
      },
      {
        image: "/media/projects/gallery/6.jpg",
      },
      {
        image: "/media/projects/gallery/1.jpg",
      },
    ],
    title: "شركة باتيك لصناعة البيتون",
    cover_image: "/media/projects/covers/batec.jpg",
    short_description:
      "شركة باتيك لصناعة البيتون شركة باتيك لصناعة البيتون شركة باتيك لصناعة البيتون شركة باتيك لصناعة البيتون",
    area: "3000",
    location: "المدينة الصناعية بحسياء",
    project_type: "commercial",
    order: 0,
  },
  {
    id: 1,
    images: [
      {
        image: "/media/projects/gallery/6.jpeg",
      },
      {
        image: "/media/projects/gallery/1.jpeg",
      },
      {
        image: "/media/projects/gallery/2.jpeg",
      },
      {
        image: "/media/projects/gallery/3.jpeg",
      },
      {
        image: "/media/projects/gallery/4.jpeg",
      },
      {
        image: "/media/projects/gallery/5.jpeg",
      },
      {
        image: "/media/projects/gallery/6_iWkMzCU.jpeg",
      },
    ],
    title: "ِشركة ستارش لصناعة النشاء",
    cover_image: "/media/projects/covers/7.jpeg",
    short_description: "ِشركة ستارش لصناعة النشاء ِشركة ستارش لصناعة النشاء",
    area: "2000",
    location: "المدينة الصناعية بحسياء",
    project_type: "commercial",
    order: 1,
  },
  {
    id: 2,
    images: [
      {
        image: "/media/projects/gallery/1_mfkHYLH.jpeg",
      },
      {
        image: "/media/projects/gallery/2_CCqKh0b.jpeg",
      },
      {
        image: "/media/projects/gallery/3_zXRmWnt.jpeg",
      },
      {
        image: "/media/projects/gallery/5_Y9tDpfK.jpeg",
      },
      {
        image: "/media/projects/gallery/6_YOzros0.jpeg",
      },
    ],
    title: "شركة سلمى لصناعة الزيوت",
    cover_image: "/media/projects/covers/4.jpeg",
    short_description:
      "شركة سلمى لصناعة الزيوت شركة سلمى لصناعة الزيوت شركة سلمى لصناعة الزيوت شركة سلمى لصناعة الزيوت",
    area: "2000",
    location: "المدينة الصناعية بحسياء",
    project_type: "commercial",
    order: 2,
  },
  {
    id: 6,
    images: [
      {
        image: "/media/projects/gallery/1_BsnKVzf.jpeg",
      },
      {
        image: "/media/projects/gallery/3_3IrPWhm.jpeg",
      },
      {
        image: "/media/projects/gallery/4_I22jlJT.jpeg",
      },
    ],
    title: "ِشركة حاكمي للرخام",
    cover_image: "/media/projects/covers/2_1yRyLzT.jpeg",
    short_description:
      "ِشركة حاكمي للرخام ِشركة حاكمي للرخام ِشركة حاكمي للرخام ِشركة حاكمي للرخام",
    area: "500",
    location: "المدينة الصناعية بحسياء",
    project_type: "commercial",
    order: 3,
  },
  {
    id: 4,
    images: [
      {
        image: "/media/projects/gallery/2_kTK2p8A.jpeg",
      },
      {
        image: "/media/projects/gallery/3_mDCTIVT.jpeg",
      },
      {
        image: "/media/projects/gallery/4_zvjsckO.jpeg",
      },
    ],
    title: "تصميم و تنفيذ عيادة طبيب",
    cover_image: "/media/projects/covers/1.jpeg",
    short_description:
      "تصميم و تنفيذ عيادة طبيب تصميم و تنفيذ عيادة طبيب تصميم و تنفيذ عيادة طبيب",
    area: "200",
    location: "حمص",
    project_type: "finishing",
    order: 4,
  },
  {
    id: 5,
    images: [
      {
        image: "/media/projects/gallery/2_3fgvqvE.jpeg",
      },
      {
        image: "/media/projects/gallery/3_e0bxlAb.jpeg",
      },
      {
        image: "/media/projects/gallery/5_eT9gSc8.jpeg",
      },
      {
        image: "/media/projects/gallery/6_IvI63kV.jpeg",
      },
      {
        image: "/media/projects/gallery/7.jpeg",
      },
    ],
    title: "تصميم شقة سكنية",
    cover_image: "/media/projects/covers/1_ctPuQqx.jpeg",
    short_description:
      "تصميم شقة سكنية تصميم شقة سكنية تصميم شقة سكنية تصميم شقة سكنية",
    area: "200",
    location: "حمص",
    project_type: "design",
    order: 5,
  },
  {
    id: 3,
    images: [
      {
        image: "/media/projects/gallery/1_RsnnItT.jpeg",
      },
    ],
    title: "أعمال هنغارات",
    cover_image: "/media/projects/covers/2.jpeg",
    short_description: "أعمال هنغارات أعمال هنغارات أعمال هنغارات",
    area: "2000",
    location: "المدينة الصناعية بحسياء",
    project_type: "commercial",
    order: 6,
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
