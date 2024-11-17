import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchCourseDetails } from "../../../../Services/course.services";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import "./Study.css";

function Study() {
  const { courseId } = useParams(); // Get courseId from URL parameters
  const [course, setCourse] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    const study = async () => {
      try {
        const response = await fetchCourseDetails(courseId);
        console.log(response);
        setCourse(response);
      } catch (error) {
        setError(error);
      }
    };
    study();
  }, [courseId]);

  return (
    <main id="main" className={`${adminstyle.main}`}>
      <div className={`${adminstyle.pagetitle}`}>
        <h1>{course ? course.course_name : "course not found"}</h1>
      </div>
      <section id="courses" className="courses section">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="card mb-2">
                <div className="card-body">
                  <a
                    href={course ? course.course_video_url : "Loading"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Course Video
                  </a>
                </div>
              </div>
              <div className="card mb-2">
                <div className="card-body">
                <a
                    href={course ? course.course_notes_url : "Loading"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Course Notes
                  </a>
                </div>
              </div>
              <div className="card mb-2">
                <div className="card-body">
                <a
                    href={course ? course.course_assignment_url : "Loading"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Course Assignments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Study;
