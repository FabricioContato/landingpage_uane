import React from "react";
import uane_fdr_logos from "../../img/uane_fdr_logos.png"
import course_picture from "../../img/course_picture.png"
//import "bootstrap/dist/css/bootstrap.min.css";
import style from "./HeroSection.module.css"; // custom styles

const HeroSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#2a084c" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-lg-6 text-white">
            <div className="mb-3">
              <span className="badge btn btn-outline-light text-light me-2">TÉCNICO</span>
              <span className="badge btn btn-outline-light text-light">TECNOLOGIA E PROFISSÃO</span>
            </div>

            <h2 className="fw-bold">Secretaria Escolar</h2>
            <p className="mt-3">
              O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente
              da escola, garantindo o funcionamento legal e organizado da instituição.
              Responsável por gerenciar a documentação dos estudantes, ele(a) também
              contribui para o alinhamento do currículo escolar com as necessidades reais
              dos alunos. Seja essencial para o sucesso da escola e para a formação de um
              ambiente educacional estruturado. Invista na sua capacitação e faça a
              diferença na gestão escolar!
            </p>

          <div className="row align-items-center mt-4"> 
	    {/* Logos left */} 
	    <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-sm-start" > 
	      <img src={uane_fdr_logos} alt="Logo 1" className="me-3" />
	    </div> 
	    {/* Button right (goes below on mobile) */} 
	    <div className="col-12 col-md-6 text-center text-sm-start"> 
	      <button className={"btn rounded-pill fw-bold px-4 py-2 " + style.enroll_button}> Faça sua matrícula </button> 
	    </div>
	  </div>

          </div>

          {/* Right side */}
          <div className="col-lg-6 text-center mb-3 mb-lg-0 mt-lg-0 order-first order-lg-last">
            <img
              src={course_picture}
              alt="Profissional Secretaria Escolar"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

