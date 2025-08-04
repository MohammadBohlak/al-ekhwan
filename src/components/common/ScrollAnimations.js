import React, { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // تأثير الظهور عند التمرير
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    // تمرير سلس للروابط
    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    };

    // مستمعي الأحداث للتمرير
    window.addEventListener('scroll', handleScrollAnimation);
    
    // تهيئة التمرير السلس
    smoothScroll();
    
    // تشغيل التحقق الأولي للعناصر المرئية
    handleScrollAnimation();
    
    // تأثيرات تفاعلية للبطاقات
    const cards = document.querySelectorAll('.service-card, .project-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotateX(0deg)';
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return null;
};

export default ScrollAnimations;