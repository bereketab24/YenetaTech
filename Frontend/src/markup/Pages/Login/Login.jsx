import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../../Services/auth.services";
import classes from "../../../assets/styles/user/user.module.css";
import logo1 from "../../../assets/images/logoYc.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  //Error handling
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError("Please provide your Email!");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Invalid email format!");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter your Password!");
      valid = false;
    } else if (serverError) {
      setPasswordError(serverError);
      valid = false;
    } else {
      setPasswordError("");
    }
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
    if (!valid) {
      return;
    }

    const loginData = {
      email,
      password,
    };

    try {
      const userData = await login(loginData);
      navigate("/admin");
    } catch (error) {
      console.log("Error response from server:", error.message);
      let errorMessage = "An error occurred. Please try again later.";

      if (error.message) {
        errorMessage = error.message;
      }

      setServerError(errorMessage);
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
                          Login to Your Account
                        </h5>
                        <p className="text-center small">
                          Enter your email & password to login
                        </p>
                      </div>
                      {serverError && (
                        <div className="alert alert-danger" role="alert">
                          {serverError}
                        </div>
                      )}

                      <form
                        onSubmit={handleLogin}
                        className="row g-3 needs-validation"
                        noValidate
                      >
                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`form-control ${
                              emailError ? "is-invalid" : ""
                            }`}
                            id="yourEmail"
                            autoComplete="email"
                          />
                          <div className="invalid-feedback">{emailError}</div>
                        </div>

                        <div className="col-12">
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
                        </div>

                        <div className="col-12">
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
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Don't have account?
                            <Link to="/register"> Create an account</Link>
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
      </main>
    </>
  );
}

export default Login;

//ll
