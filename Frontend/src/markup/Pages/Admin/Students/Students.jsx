import React from "react";
import adminstyle from "../../../../assets/styles/user/user.module.css";

function Students() {
  return (
    <>
      <main id="main" className={`${adminstyle.main}`}>
        <div className={`${adminstyle.pagetitle}`}>
          <h1>Dashboard</h1>
          <nav>
            <ol className={`breadcrumb`}>
              <li className={`breadcrumb-item`}>
                <a href="index.html">Home</a>
              </li>
              <li className={`breadcrumb-item active`}>Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <div>
                  <h5 className="card-title">Table with hoverable rows</h5>

                  <table className="table table-hover datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Age</th>
                        <th scope="col">Start Date</th>

                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Brandon Jacob</td>
                        <td>Designer</td>
                        <td>28</td>
                        <td>2016-05-25</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Bridie Kessler</td>
                        <td>Developer</td>
                        <td>35</td>
                        <td>2014-12-05</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Ashleigh Langosh</td>
                        <td>Finance</td>
                        <td>45</td>
                        <td>2011-08-12</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Angus Grady</td>
                        <td>HR</td>
                        <td>34</td>
                        <td>2012-06-11</td>

                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Raheem Lehner</td>
                        <td>Dynamic Division Officer</td>
                        <td>47</td>
                        <td>2011-04-19</td>

                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Raheem Lehner</td>
                        <td>Dynamic Division Officer</td>
                        <td>47</td>
                        <td>2011-04-19</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

        
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Students;
