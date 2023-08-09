import AboutComponent from '../components/about/AboutComponent';
import IntroComponent from '../components/intro/IntroComponent';
import Navigation from '../components/navigation/Navigation';
import ProjectComponent from '../components/project/ProjectComponent';
import ContactComponent from '../components/contact/ContactComponent';
import ScrollDownComponent from '../components/scrollDown/ScrollDownComponent';

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
