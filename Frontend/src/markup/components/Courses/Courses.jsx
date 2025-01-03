import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../../Services/course.services";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchDataFromService = async () => {
      try {
        const fetchedData = await fetchData();
        setCourses(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromService();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {courses.map((course) => (
          <div
            className="col-lg-4 col-md-6 align-items-center mb-5 mb-lg-3"
            key={course.course_id}
          >
            <div className="course-item shadow">
              <img
                src={course.course_image}
                className="img-fluid"
                alt="Course Image"
              />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="category">{course.category}</p>
                </div>
                <h3>
                  <Link to={`/courses/${course.course_id}`}>
                    {course.course_name}
                  </Link>
                </h3>
                <p className="description">
                  {course.description}
                  <br />
                  <b>No Prior Knowledge Required!</b>
                </p>
                <div className="pricing">
                  {course.course_fee}
                  <div className="btn-wrap">
                    <Link to="/login" className="btn-buy">
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    //   <div className="container">
    //     <div className="row ">
    //       {courses.map((course) => (
    //           <div key={course.course_id} className="col-lg-4 col-md-6  align-items-center mb-3 mb-lg-0">
    //             <div className="course-item shadow">
    //               <img
    //                 src={course.course_image}
    //                 className="img-fluid"
    //                 alt="Course Image"
    //               />
    //               <div className="course-content">
    //                 <div className="d-flex justify-content-between align-items-center mb-3">
    //                   <p className="category">{course.category}</p>
    //                 </div>

    //                 <h3>
    //                   <Link to="/courses/:courseID">{course.course_name}</Link>
    //                 </h3>
    //                 <p className="description">
    //                   {course.description}
    //                   {"  "}
    //                   <strong>No Prior Knowledge Required!</strong>
    //                 </p>
    //                 <div className="pricing">
    //                   {course.course_fee}
    //                   <div className="btn-wrap">
    //                     <Link to="/enroll" className="btn-buy">
    //                       Enroll
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //       {/* <div className="col-lg-4 col-md-6 d-flex align-items-center mb-3 mb-lg-0">
    //         <div className="course-item shadow">
    //           <img src={course1} className="img-fluid" alt="..." />
    //           <div className="course-content">
    //             <div className="d-flex justify-content-between align-items-center mb-3">
    //               <p className="category">Full-Stack Web Development</p>
    //             </div>

    //             <h3>
    //               <Link to="/courses/:courseID">MERN Stack</Link>
    //             </h3>
    //             <p className="description">
    //               Full-Stack (MERN) Web Development from scratch.
    //               <strong>No Prior Knowledge Required!</strong>
    //             </p>
    //             <div className="pricing">
    //               <div className="btn-wrap">
    //                 <Link to="/enroll" className="btn-buy">
    //                   Enroll
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Courses;
