import AboutComponent from '../components/AboutComponent';
import ContactComponent from '../components/ContactComponent';
import IntroComponent from '../components/IntroComponent';
import ProjectComponent from '../components/ProjectComponent';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <IntroComponent></IntroComponent>
      <AboutComponent></AboutComponent>
      <ProjectComponent></ProjectComponent>
      <ContactComponent></ContactComponent>
      <div className={styles.scroll}>
        <div></div>
        <div></div>
        <p>SCROLL DOWN</p>
      </div>
    </>
  );
}
