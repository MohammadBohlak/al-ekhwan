import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    --p-section: 100px; 
    --primary: #ff8c00;
    --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    
  @media (max-width: 768px) {
    --p-section: 80px;
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
  /* خلفية متحركة مع شبكة */
  .background-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        linear-gradient(rgba(255, 140, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 140, 0, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
    z-index: -2;
  }
  
  @keyframes gridMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }
  
  /* جزيئات متحركة */
  .particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }
  
  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #ff8c00;
    border-radius: 50%;
    opacity: 0.7;
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
      opacity: 1;
    }
  }
  
  /* Sections */
  .section {
    /* padding: var(--p-section) 2rem; */
    /* max-width: 1200px; */
    /* margin: 0 auto; */

  }
  
  .section h2 {
    /* font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #ff8c00;
    position: relative; */
  }
  
  .section h2::after {
    /* content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #ff8c00, #ff6600); */
  }
  
  /* أنيميشن الظهور عند التمرير */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* تصميم متجاوب */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    
    .project-name {
      font-size: 1rem;
    }

    .project-indicator {
      padding: 1.5rem;
    }
    
    .cta-button {
      padding: 12px 30px;
      font-size: 1rem;
    }

    .nav-arrow.prev {
      right: 20px;
    }
    
    .nav-arrow.next {
      left: 20px;
    }
    
    .section {
      /* padding: 60px 1rem; */
    }
    
    .services-grid,
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .project-name {
      font-size: 1.5rem;
    }
    
    .project-indicator {
      padding: 1rem 1.5rem;
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
