import './App.css';
import HeroSection from './Sections/HeroSection/HeroSection';
import AboutSection from './Sections/AboutSection/AboutSection';
import SkillsExperience from './Sections/SkillsExperience/SkillsExperience';
import PortfolioSection from './Sections/PortfolioSection/PortfolioSection';
import ContactSection from './Sections/ContactSection/ContactSection';
import NavBar from './Components/NavBar/NavBar';
import { useIntersectionObserver } from './Hooks/useIntersectionObserver';

function App() {
  // Define all section IDs that the NavBar needs to track
  const sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];

  // Use the hook to track the active section ID
  // Root Margin: '-40% 0px -60% 0px' means an element is "active" only when the top 40% and bottom 60% of the screen are ignored.
  // This effectively makes the top of the section the activation point.
  const activeSectionId = useIntersectionObserver(sectionIds, '-70px 0px -50% 0px');

  return (
    <div className="portfolio-app-container">
      <NavBar activeSection={activeSectionId} />
      <main>
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <SkillsExperience id="skills" />
        <PortfolioSection id="portfolio" />
        <ContactSection id="contact" />
      </main>
    </div>
  );
}

export default App;
