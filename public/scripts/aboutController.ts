import styles from 'app/components/about.module.css';

export function initAboutObserver() {
  const aboutComponent = document
    .getElementsByClassName(styles.aboutWrapper)
    .item(0) as HTMLElement;
  const img = document.getElementById('defaultImg');
  if (!aboutComponent || !img) return;

  const observer = new IntersectionObserver(
    (entries, _observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) img.style.transform = 'translate(0)';
        else img.style.transform = 'translate(100%, 0)';
      });
    },
    { threshold: 0.6 }
  );
  observer.observe(aboutComponent);
}
