import Welcome from "./components/Welcome"
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/Herosection/HeroSection"
import CourseStats from "./components/CourseStats/CourseStats"
import CollapsiblePanels from "./components/CollapsiblePanels/CollapsiblePanels"
import CourseCardGrid from "./components/CourseCardGrid/CourseCardGrid"

export default function App() {

const coursesData = [
  {
    image: "./src/img/card_picture_ambiental.png",
    tags: ["EXTENSÃO", "BEM-VIVER"],
    title: "Educação Ambiental para um Presente Sustentável",
    author: "Fundação Demócrito Rocha"
  },
  {
    image: "./src/img/card_picture_municipal.png",
    tags: ["CURTA DURAÇÃO", "TECNOLOGIA E PROFISSÃO"],
    title: "Como Implementar a Política Municipal de Educação Ambiental",
    author: "Daniel Pagliuca"
  },
  {
    image: "./src/img/card_picture_bullying.png",
    tags: ["CURTA DURAÇÃO", "BEM-VIVER"],
    title: "Bullying: conhecer para combater",
    author: "Grecinanny Carvalho"
  },
  {
    image: "./src/img/card_picture_gestao_fiscal.png",
    tags: ["EXTENSÃO", "BEM-VIVER"],
    title: "Gestão Fiscal Interfederativa",
    author: "Fundação Demócrito Rocha"
  }
];

return (
<>
<Navbar/>
<HeroSection />
<CourseStats />
<CollapsiblePanels />
<CollapsiblePanels title="O que você vai aprender aprender"/>
<CourseCardGrid courses={coursesData} />
</>
);
}
