import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCoursesbyCourseId } from "../../../../Services/course.services";

function Study() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  useEffect(() => {
    const study = async () => {
      try {
        const response = await getCoursesbyCourseId(courseId);
      } catch (error) {
        
      }
    } 
  });
  return (
    <main id="main" className={`${adminstyle.main}`}>
      <div className={`${adminstyle.pagetitle}`}>
        <h1>Courses</h1>
        <nav>
          <ol className={`breadcrumb`}>
            <li className="breadcrumb-item">
              <a className={`${adminstyle.a}`} href="index.html">
                Student
              </a>
            </li>
            <li className={`breadcrumb-item active`}>Courses</li>
          </ol>
        </nav>
      </div>
    </main>
  );
}

export default Study;
