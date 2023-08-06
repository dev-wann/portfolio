import AboutComponent from '../components/about/AboutComponent';
import ContactComponent from '../components/contact/ContactComponent';
import IntroComponent from '../components/intro/IntroComponent';
import Navigation from '../components/Navigation';
import ProjectComponent from '../components/project/ProjectComponent';
import ScrollDownComponent from '../components/ScrollDownComponent';

export default function Home() {
  return (
    <div className="prevent-select">
      <IntroComponent></IntroComponent>
      <Navigation></Navigation>
      <AboutComponent></AboutComponent>
      <ProjectComponent></ProjectComponent>
      <ContactComponent></ContactComponent>
      <ScrollDownComponent></ScrollDownComponent>
    </div>
  );
}
