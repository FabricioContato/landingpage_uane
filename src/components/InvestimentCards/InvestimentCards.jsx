import React from "react";
import op_logo from "../../img/OP_logo.png"
import style from "./InvestmentCards.module.css"


const InvestmentCards = () => {
  return (
    <div className="container my-5">
      <h5
	 className={"fw-bold mb-4 ps-2 fs-4 " + style.left_border}
        >
          Investimento
        </h5>

      <div className="row g-3">
        {/* First Card */}
        <div className="col-12 col-lg-6">
          <div className="card text-white h-100 p-3" style={{backgroundColor: "#04254E"}}>
            <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
              <h6 className="card-subtitle mb-2 fs-5">3º lote: Total de R$ 2.835,35</h6>
              <p className="card-text fs-5">+ Matrícula de R$ 70</p>
              <h5 className="card-title fs-2">Até 15X de R$ 189,02</h5>
              <button className={"btn rounded-pill fw-bold px-4 py-2 " + style.enroll_button}> Faça sua matrícula </button> 
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className=" col-12 col-lg-6">
          <div className="card h-100 p-3" style={{backgroundColor: "#DFDFDF"}}>
            <div className="card-body text-center">
              <img src={op_logo}></img>
              <p className="card-text fw-bold fs-5">Ganhe acesso grátis por 90 dias.</p>
              <ul className="list-unstyled">
                <li>Reportagens & Colunistas</li>
                <li>Filmes & Séries</li>
                <li>Podcasts & Web Stories</li>
              </ul>
              <a href="#" className={style.custom_a} >Conheça o OPOVO+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCards;
