import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { verifyEmail } from "../../../Services/auth.services";
import classes from "../../../assets/styles/user/user.module.css";
import logo1 from "../../../assets/images/logoYc.png";
import { useAuth } from "../../../Contexts/Authcontext";

function Verify() {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const { authData } = useAuth();
 const email = authData.email
  console.log(authData);

  const verificationData = { OTP, email };

  console.log(verificationData)

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyEmail(verificationData);
      console.log(response)
      //   const roleid = userData.data.user.role_id
      if (response.is_verified) {
        const roleid = response.role_id;
        if (roleid === 1) {
          navigate("/admin");
        } else if (roleid === 2) {
          navigate("/student");
        }
      }
    } catch (error) {
    //   console.log("Error response from server:", error.message);
    //   let errorMessage = "An error occurred. Please try again later.";

    //   if (error.message) {
    //     errorMessage = error.message;
    //   }

      setServerError(error.message);
    }
  };

  return (
    <>
      <main>
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
                      <span className="d-none d-lg-block">Yeneta</span>
                    </Link>
                  </div>

                  <div className={`${classes.card} mb-3 shadow`}>
                    <div className={`${classes.cardbody}`}>
                      <div className="pt-4 pb-2">
                        <h5
                          className={`${classes.cardtitle} text-center pb-0 fs-4`}
                        >
                          Verify Your Account
                        </h5>
                        <p className="text-center alert alert-success">
                          Registration successful!{" "}
                        </p>
                        <p className="">
                          Please check your email for the verification code and
                          verify your email!.
                        </p>
                      </div>
                      {/* {serverError && (
                        <div className="alert alert-danger" role="alert">
                          {serverError}
                        </div>
                      )} */}

                      <form
                        onSubmit={handleVerification}
                        className="row g-3 needs-validation"
                        noValidate
                      >
                        <div className="col-12">
                          <label
                            htmlFor="yourEmail"
                            className="form-label text-center"
                          >
                            Enter the code
                          </label>
                          <input
                            type="text"
                            value={OTP}
                            placeholder="Enter the code"
                            onChange={(e) => setOTP(e.target.value)}
                            className={`form-control ${
                              serverError ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">{serverError}</div>
                        </div>

                        {/* <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`form-control ${
                              passwordError ? "is-invalid" : ""
                            }`}
                            id="yourPassword"
                            autoComplete="current-password"
                          />
                          <div className="invalid-feedback">
                            {passwordError}
                          </div>
                        </div> */}

                        {/* <div className="col-12">
                          <div className="form-check">
                            <input
                              className={`form-check-input`}
                              type="checkbox"
                              name="remember"
                              id="rememberMe"
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                        </div> */}
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Verify
                          </button>
                        </div>
                        {/* <div className="col-12">
                          <p className="small mb-0">
                            Don't have account?
                            <Link to="/register"> Create an account</Link>
                          </p>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Verify;
