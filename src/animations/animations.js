export const titleAnimation = {
  initial: { scale: 0, y: -50 },
  whileInView: { scale: 1, y: 0 },
  transition: { duration: 1, delay: "0.2" },
  viewport: { once: true },
};
// export const titleAnimation = {
//   initial: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
//   whileInView: { clipPath: "polygon(0 0, 100% 0, 100% 150%, 0 150%)" },
//   transition: { duration: 1, delay: "0.2" },
//   viewport: { once: true },
// };

export const sectionAnimation = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.2, ease: "linear" },
  viewport: { once: true },
};
export const cardAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.3, ease: "linear" },
  viewport: { once: true },
};
