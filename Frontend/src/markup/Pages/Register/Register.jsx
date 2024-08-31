import React from "react";
import { Link } from "react-router-dom";
import classes from "../Login/LoginCss/Login.module.css";
import logo1 from "../../../assets/images/logoYc.png";

function Register() {
  return (
    <>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to="/"
                    className={`${classes.logo} d-flex align-items-center w-auto`}
                  >
                    <img src={logo1} alt="" />
                    <span className="d-none d-lg-block">Yeneta Tech</span>
                  </Link>
                </div>

                <div className={`${classes.card} mb-3 shadow`}>
                  <div className={`${classes.cardbody}`}>
                    <div className="pt-4 pb-2">
                      <h5
                        className={`${classes.cardtitle} text-center pb-0 fs-4`}
                      >
                        Create an Account
                      </h5>
                      <p className="text-center small">
                        Enter your personal details to create account
                      </p>
                    </div>

                    <form className="row g-3 needs-validation" novalidate>
                      <div className="col-12">
                        <label for="yourName" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          required
                        />
                        <div className="invalid-feedback">
                          Please, enter your name!
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="yourEmail" className="form-label">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="yourEmail"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid Email adddress!
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            required
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="terms"
                            type="checkbox"
                            value=""
                            id="acceptTerms"
                            required
                          />
                          <label className="form-check-label" for="acceptTerms">
                            I agree and accept the
                            <Link to="/terms">terms and conditions</Link>
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?
                          <Link to="/login"> Log in</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
