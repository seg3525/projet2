import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./index.css";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    aos.init({ duration: 700 });
  }, []);
  return (
    <>
      <Navigation />
      <Hero />
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default App;
