import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => state
  );

  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: course.completed ? "lightblue" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span>{course?.title}</span>
                <button
                  className="delete-btn"
                  onClick={(e) => removeCourse(course.id)}
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
