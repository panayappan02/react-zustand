import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");
  console.log("CourseForm Rendered");

  const handleourseSubmit = () => {
    if (!courseTitle) return alert("please add a course title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
      completed: false,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button className="form-submit-btn" onClick={handleourseSubmit}>
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
