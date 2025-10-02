import { useState, useEffect, useRef } from 'react';

import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/Herosection/HeroSection"
import CourseStats from "./components/CourseStats/CourseStats"
import CollapsiblePanels from "./components/CollapsiblePanels/CollapsiblePanels"
import CourseCardGrid from "./components/CourseCardGrid/CourseCardGrid"
import InvestimentCards from "./components/InvestimentCards/InvestimentCards"
import Footer from "./components/Footer/Footer"

function getIdParam(){
  const params = new URLSearchParams(location.search);
  return params.get('id') ? params.get('id') : "5";
}

export default function App() {
  const [isLoading, setIsLoading] = useState({});
  const heroSectionObj = useRef({});
  const courseStatsObj = useRef({});
  const infoPanelsObj = useRef({});
  const modulePanelsObj = useRef({});
  const idParam = useRef(getIdParam());

  useEffect(() => {

    const dataFetch = async () => {
      const response = await fetch(`http://127.0.0.1:8000/?id=${idParam.current}`);
      const data = await response.json();

      const heroSectionObj_ = {};
      heroSectionObj_.title = data["title"];
      heroSectionObj_.description = data["description"];
      heroSectionObj_.picture = data["href"];
      heroSectionObj_.tags = data["tags"];

      heroSectionObj.current = heroSectionObj_;

      const courseStatsObj_ = {};
      courseStatsObj_.hours = data["stats"][0];
      courseStatsObj_.modules = data["stats"][1];
      courseStatsObj_.months = data["stats"][2];
      courseStatsObj_.modality = data["stats"][3];

      courseStatsObj.current = courseStatsObj_;

      infoPanelsObj.current = data["info"];

      modulePanelsObj.current = data["modulos"];

      setIsLoading(false);

    }

    dataFetch();

  } , []);

const coursesData = [
  {
    image: "./src/img/card_picture_ambiental.png",
    tags: ["EXTENSÃO", "BEM-VIVER"],
    title: "Educação Ambiental para um Presente Sustentável",
    author: "Fundação Demócrito Rocha",
    url: "/?id=1"
  },
  {
    image: "./src/img/card_picture_municipal.png",
    tags: ["CURTA DURAÇÃO", "TECNOLOGIA E PROFISSÃO"],
    title: "Como Implementar a Política Municipal de Educação Ambiental",
    author: "Daniel Pagliuca",
    url: "/?id=2"
  },
  {
    image: "./src/img/card_picture_bullying.png",
    tags: ["CURTA DURAÇÃO", "BEM-VIVER"],
    title: "Bullying: conhecer para combater",
    author: "Grecinanny Carvalho",
    url: "/?id=3"
  },
  {
    image: "./src/img/card_picture_gestao_fiscal.png",
    tags: ["EXTENSÃO", "BEM-VIVER"],
    title: "Gestão Fiscal Interfederativa",
    author: "Fundação Demócrito Rocha",
    url: "/?id=4"
  },
  {
    image: "./src/img/card_picture_diretor.png",
    tags: ["TÉCNICO", "TECNOLOGIA E PROFISSÃO"],
    title: "Secretaria Escolar",
    author: "Fundação Demócrito Rocha",
    url: "/?id=5"
  }
];

return (
<>
<Navbar/>
{ !isLoading &&
<>
<HeroSection {...heroSectionObj.current}/>
<CourseStats {...courseStatsObj.current}/>
<CollapsiblePanels title="Informações para decidir" data={infoPanelsObj.current} />
<CollapsiblePanels title="O que você vai aprender aprender" data={modulePanelsObj.current}/>
<CourseCardGrid courses={coursesData} />
<InvestimentCards/>
<Footer/>
</>}
</>
);
}
