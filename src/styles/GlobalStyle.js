import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html{
    /* font-size: 10px; */
  }
  
  body {
     font-family: 'Tajawal', sans-serif !important;

    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    /* background: #2a2929ff; */
    background-color: #f5f7f8;
    color: #fff;
    /* overflow-x: hidden; */
    /* line-height: 1.6; */
  }
  :root{
    --h-navbar: 80px;
    --p-section: 40px; 
    --primary: #ff8c00;
    --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    
  @media (max-width: 992px) {
    --p-section: 40px;
  }
  @media (max-width: 768px) {
    --p-section: 40px;
  }
   --big-text: 2.8rem ; 
    --normal-text: 1.5rem; 
    --small-text: 1.3rem; 
    --min-text: 1.1rem; 
    @media (min-width: 769px) and (max-width: 992px){
      --big-text: 2.5rem ; 
      --normal-text: 1.4rem; 
      --small-text: 1.2rem; 
      --min-text: 1rem; 
      
    }
    @media (max-width: 768px){
      --big-text: 2.2rem ; 
      --normal-text: 1.2rem; 
      --small-text: 1rem; 
      --min-text: 0.9rem; 
     --height-nav: 75px 
    }
  }
  
  /**
   * TAJAWAL FAMILY
   * ------------------------------------------
   * Tajawal-ExtraLight   200 normal
   * Tajawal-Light        300 normal
   * Tajawal-Regular      400 normal
   * Tajawal-Medium       500 normal
   * Tajawal-ExtraBold    800 normal
   * Tajawal-Black        900 normal
   */
  @font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-ExtraLight.ttf") format("truetype");
  font-weight: 200;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Light.ttf") format("truetype");
  font-weight: 300;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Regular.ttf") format("truetype");
  font-weight: 400;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Medium.ttf") format("truetype");
  font-weight: 500;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Bold.ttf") format("truetype");
  font-weight: 700;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-ExtraBold.ttf") format("truetype");
  font-weight: 800;
    font-display: swap;

}

@font-face {
  font-family: "Tajawal";
  src: url("/fonts/Tajawal-Black.ttf") format("truetype");
  font-weight: 900;
    font-display: swap;

}

  /* 3. اختيار العائلة على أساس لغة الصفحة */
  /* html[lang="ar"] {
   body{
     font-family: 'Tajawal', sans-serif !important;
 

    }
  } */
`;
