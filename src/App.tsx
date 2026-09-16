import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Founder from "./sections/Founder";
import BooksCarousel from "./sections/BooksCarousel";
import Initiatives from "./sections/Initiatives";
import Partners from "./sections/Partners";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <BooksCarousel />
      <Initiatives />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
