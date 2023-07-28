import AboutComponent from '../components/AboutComponent';
import ContactComponent from '../components/ContactComponent';
import IntroComponent from '../components/IntroComponent';
import ProjectComponent from '../components/ProjectComponent';
import ScrollDownComponent from '../components/ScrollDownComponent';

export default function Home() {
  return (
    <div className="prevent-select">
      <IntroComponent></IntroComponent>
      <AboutComponent></AboutComponent>
      <ProjectComponent></ProjectComponent>
      <ContactComponent></ContactComponent>
      <ScrollDownComponent></ScrollDownComponent>
    </div>
  );
}
