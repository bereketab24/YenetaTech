import React from "react";
import adminstyle from "../../../../assets/styles/user/user.module.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className={`${adminstyle.body} ${adminstyle.hpro}`}>
      <body className={`${adminstyle.body} ${adminstyle.wrapping}`}>
        <main id="main" className={`${adminstyle.main}`}>
          <div className={`${adminstyle.pagetitle}`}>
            <h1>Dashboard</h1>
            <nav>
              <ol className={`breadcrumb`}>
                <li className="breadcrumb-item">
                  <a className={`${adminstyle.a}`} href="index.html">Home</a>
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
                        <h5 className={`${adminstyle.cardtitle}`}>Students</h5>

                        <div className="d-flex align-items-center">
                          <div
                            className={`${adminstyle.cardicon} rounded-circle d-flex align-items-center justify-content-center`}
                          >
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">
                              12%
                            </span>
                            <span className="text-muted small pt-2 ps-1">
                              decrease
                            </span>
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
                        <h5 className={`${adminstyle.cardtitle}`}>Courses</h5>

                        <div className="d-flex align-items-center">
                          <div
                            className={`${adminstyle.cardicon} rounded-circle d-flex align-items-center justify-content-center`}
                          >
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">
                              12%
                            </span>
                            <span className="text-muted small pt-2 ps-1">
                              decrease
                            </span>
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
      </body>
    </div>
  );
}

export default Dashboard;
