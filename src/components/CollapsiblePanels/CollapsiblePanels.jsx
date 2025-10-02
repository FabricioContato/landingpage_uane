import React from "react";
import style from "./CollapsiblePanels.module.css"

const CollapsiblePanels = ({ title = "Informações", data = {"test_key": "test_content", "test2": "test_contetn2"} }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section title with custom border color */}
        <h5
	 className={"fw-bold mb-4 ps-2 fs-4 " + style.left_border}
        >
          {title}
        </h5>

        <div className="accordion" id="infoAccordion">
          {Object.entries(data).map(([key, value], index) => {
	          const randomInt = Math.floor(Math.random() * 100000000);
            
	          const collapseId = `collapse${index}-${randomInt}`;
            const headingId = `heading${index}-${randomInt}`;

            return (
              <div className="accordion-item mb-2" key={index}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={"accordion-button collapsed fw-bold text-secondary d-block fs-5 " + style.panel_bg} 
                    type="button"
		    style={{backgroundColor: "#ffffff"}}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    {key}
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={headingId}
                  data-bs-parent="#infoAccordion"
                >
                  <div className="accordion-body">{value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollapsiblePanels;

