import React, { useEffect, useState } from "react";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import { Box, Typography } from "@mui/material";
import { getalluser } from "../../../../Services/admin.services";
import { fetchData } from "../../../../Services/course.services";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    const getCounts = async () => {
      try {
        const response = await getalluser();
        const users = response.data
        const courses = await fetchData();
        console.log(users);
        console.log(courses);

        setUserCount(users.length); // Assuming users is an array
        setCourseCount(courses.length); // Assuming courses is an array
      } catch (error) {
        console.error("Failed to fetch counts", error);
      }
    };

    getCounts();
  }, []);

  return (
    <div className={`${adminstyle.body} ${adminstyle.hpro}`}>
      <div className={`${adminstyle.body} ${adminstyle.wrapping}`}>
        <main id="main" className={`${adminstyle.main}`}>
          <div className={`${adminstyle.pagetitle}`}>
            <h1>Dashboard</h1>
            <nav>
              <ol className={`breadcrumb`}>
                <li className="breadcrumb-item">
                  <a className={`${adminstyle.a}`} href="index.html">
                    Home
                  </a>
                </li>
                <li className={`breadcrumb-item active`}>Dashboard</li>
              </ol>
            </nav>
          </div>

          <section className={`${adminstyle.dashboard} ${adminstyle.body}`}>
            <div className="row">
              <div className={` col-lg-12`}>
                <div className="row">
                  <div className=" col-xl-12">
                    <div
                      className={`${adminstyle.card} ${adminstyle.infocard} ${adminstyle.customerscard} ${adminstyle.white} rounded shadow-sm`}
                    >
                      <div className={`${adminstyle.cardbody}`}>
                        <h5 className={`${adminstyle.cardtitle}`}>Total Number of Users</h5>

                        <div className="d-flex align-items-center">
                          <div
                            className={`${adminstyle.cardicon} rounded-circle d-flex align-items-center justify-content-center`}
                          >
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>{userCount}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" col-xl-12">
                    <div
                      className={`${adminstyle.card} ${adminstyle.infocard} ${adminstyle.customerscard} ${adminstyle.white} shadow-sm`}
                    >
                      <div className={`${adminstyle.cardbody}`}>
                        <h5 className={`${adminstyle.cardtitle}`}>Total Number of Courses</h5>

                        <div className="d-flex align-items-center">
                          <div
                            className={`${adminstyle.cardicon} rounded-circle d-flex align-items-center justify-content-center`}
                          >
                            <i className="bi bi-book"></i>
                          </div>
                          <div className="ps-3">
                            <h6>{courseCount}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
