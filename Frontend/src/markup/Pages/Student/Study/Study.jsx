import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCourseDetails } from "../../../../Services/course.services";
import adminstyle from "../../../../assets/styles/user/user.module.css";

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
        <h1>{course.course_name}</h1>
      </div>
      <section id="courses" className="courses section">
        <div className="container">
          <div className="row">
            <div className="container">
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Study;
