import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../../Services/auth.services";
import classes from "../../../assets/styles/user/user.module.css";
import logo1 from "../../../assets/images/logoYc.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  //Error handling
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsAcceptedError, setTermsAcceptedError] = useState("");
  const [serverError, setServerError] = useState("");


    const handleSubmit = async (e) => {
      e.preventDefault();
      let valid = true;

      if (!fullname) {
        setFullnamerequired("Please provide your Full Name!");
        valid = false;
      } else {
        setFullnamerequired("");
      }

      if (!username) {
        setUsernamerequired("Please provide your Username!");
        valid = false;
      } else {
        setUsernamerequired("");
      }

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
      } else if (password.length < 8 || !/\d/.test(password)) {
        setPasswordError(
          "Password must be at least 8 characters and contain a number!"
        );
        valid = false;
      } else {
        setPasswordError("");
      }
      if (!termsAccepted) {
        setTermsAcceptedError("You must agree before submitting.");
        valid = false;
      } else {
        setTermsAcceptedError("");
      }

      if (!valid) {
        return;
      }

      const formData = {
        fullname,
        username,
        email,
        password,
      };

      try {
        const userData = await register(formData);
        navigate("/login");
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

                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12">
                          <label for="yourEmail" className="form-label">
                            Email
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
                              type="checkbox"
                              name="remember"
                              value="true"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              for="rememberMe"
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
