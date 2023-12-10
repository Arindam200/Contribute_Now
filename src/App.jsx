// import "./App.css";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
        <Hero />
        <Features />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
