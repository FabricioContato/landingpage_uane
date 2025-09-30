import Welcome from "./components/Welcome"
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/Herosection/HeroSection"
import CourseStats from "./components/CourseStats/CourseStats"
import CollapsiblePanels from "./components/CollapsiblePanels/CollapsiblePanels"

export default function App() {
return (
<>
<Navbar/>
<HeroSection />
<CourseStats />
<CollapsiblePanels />
<CollapsiblePanels title="O que você vai aprender aprender"/>
</>
);
}
