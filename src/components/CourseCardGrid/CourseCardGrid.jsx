import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import style from "./CourseCardGrid.module.css";

const CourseCardGrid = ({ courses = [] }) => {
  return (
    <div className="container my-4">
      <h5 className={"fw-bold mb-3 fs-4 ps-2 " + style.left_border}>Cursos</h5>

      <div className="d-flex overflow-auto">
        {courses.map((course, idx) => (
          <div className="me-3 col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCardGrid;

