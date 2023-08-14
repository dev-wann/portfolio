import AboutComponent from '../components/about/AboutComponent';
import IntroComponent from '../components/intro/IntroComponent';
import Navigation from '../components/navigation/Navigation';
import ProjectComponent from '../components/project/ProjectComponent';
import ContactComponent from '../components/contact/ContactComponent';
import ScrollDownComponent from '../components/scrollDown/ScrollDownComponent';
import GlobalIntersectionObserver from './GlobalIntersectionObserver';

export default function Home() {
  return (
    <div className="prevent-select">
      <IntroComponent />
      <Navigation />
      <AboutComponent />
      <ProjectComponent />
      <ContactComponent />
      <ScrollDownComponent />
      <GlobalIntersectionObserver />
    </div>
  );
}
