import Welcome from "./components/Welcome"
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/Herosection/HeroSection"

export default function App() {
return (
<>
<Navbar/>
<HeroSection />
<div>Hello World</div>
<Welcome />
</>
);
}
