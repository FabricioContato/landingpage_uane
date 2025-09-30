import React from "react";

const CourseStats = () => {
  return (
    <section className="py-4 bg-light border-top">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-6 col-md-3 mb-3">
            <small className="text-uppercase fw-bold text-secondary d-block fs-4">
              Carga Horária
            </small>
            <span className="fs-2 fw-light">1.500 horas</span>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <small className="text-uppercase fw-bold text-secondary d-block fs-4">
              Conteúdo
            </small>
            <span className="fs-2 fw-light">7 módulos</span>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <small className="text-uppercase fw-bold text-secondary d-block fs-4">
              Período de Acesso
            </small>
            <span className="fs-2 fw-light">15 meses</span>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <small className="text-uppercase fw-bold text-secondary d-block fs-4">
              Modalidade
            </small>
            <span className="fs-2 fw-light">EAD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStats;

