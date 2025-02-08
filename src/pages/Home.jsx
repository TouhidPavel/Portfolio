import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import TeamSection from '../components/TeamSection';
import ServiceSection from '../components/ServiceSection';
import ContactSection from "../components/ContactSection.jsx";
const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <TeamSection />
            <ServiceSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
