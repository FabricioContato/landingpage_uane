import Welcome from "./components/Welcome"
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/Herosection/HeroSection"
import CourseStats from "./components/CourseStats/CourseStats"

export default function App() {
return (
<>
<Navbar/>
<HeroSection />
<CourseStats />
<div>Hello World</div>
<Welcome />
</>
);
}
