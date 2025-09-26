import Headers from "./sections/header";
import { Hero } from "./sections/hero";
import AboutUs from "./sections/about";
import Projects from "./sections/projects";
import Footer from "./sections/footer";
import ContactSection from "./sections/contact";
import DevelopmentProcess from "./sections/developmentprocess";

export default function Home() {
  return (
    <div>
      <>
        <Headers />
        <Hero />
        <AboutUs />
        <Projects />
        <DevelopmentProcess />
        <ContactSection />
        <Footer />
      </>
    </div>
  );
}
