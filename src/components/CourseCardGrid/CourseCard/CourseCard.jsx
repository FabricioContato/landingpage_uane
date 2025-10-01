import React from "react";
import style from "./CourseCard.module.css"

const CourseCard = ({ image, tags = [], title, author }) => {
  return (
    <div className="card h-100 shadow-sm d-flex flex-column">
      {/* Image */}
      <img src={image} className="card-img-top" alt={title} />

      {/* Card body */}
      <div className={"card-body text-white d-flex flex-column mt-auto " + style.card_body_bg_color}>
        {/* Tags */}
        <div className="mb-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge btn btn-outline-light text-light me-1">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h6 className="fw-bold flex-grow-1">{title}</h6>

        {/* Author */}
        <p className="mb-0 small">Por {author}</p>
      </div>
    </div>
  );
};

export default CourseCard;

