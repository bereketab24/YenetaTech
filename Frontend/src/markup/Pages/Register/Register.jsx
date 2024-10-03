import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../../Services/auth.services";
import logo1 from "../../../assets/images/logoYc.png";
import classes from "../../../assets/styles/user/user.module.css";

function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const [fullnamerequired, setFullnamerequired] = useState("");
  const [usernamerequired, setUsernamerequired] = useState("");
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

    if (!username) {jj
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

    //     let errorMessage = "An error occurred. Please try again later.";

    // if (error.response && error.response.data && error.response.data.message) {
    //   errorMessage = error.response.data.message;
    // } else if (error.response && error.response.data && error.response.data.error) {
    //   errorMessage = error.response.data.error;
    // } else if (error.response && error.response.data && error.response.data.message) {
    //   errorMessage = error.response.data.message;
    // }

    // setServerError(errorMessage);
  };

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
                    <img src={logo1} alt="Yeneta Tech" />
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
                        Enter your personal details to create an account
                      </p>
                    </div>
                    {serverError && (
                      <div className="alert alert-danger" role="alert">
                        {serverError}
                      </div>
                    )}

                    <form
                      onSubmit={handleSubmit}
                      className="row g-3"
                      noValidate
                    >
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          className={`form-control ${
                            fullnamerequired ? "is-invalid" : ""
                          }`}
                          id="yourName"
                          autoComplete="name"
                        />
                        <div className="invalid-feedback">
                          {fullnamerequired}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Your Email
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
                        <label htmlFor="yourUsername" className="form-label">
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`form-control ${
                              usernamerequired ? "is-invalid" : ""
                            }`}
                            id="yourUsername"
                            autoComplete="username"
                          />
                          <div className="invalid-feedback">
                            {usernamerequired}
                          </div>
                        </div>
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
                          autoComplete="new-password"
                        />
                        <div className="invalid-feedback">{passwordError}</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className={`form-check-input ${
                              termsAcceptedError ? "is-invalid" : ""
                            }`}
                            type="checkbox"
                            id="acceptTerms"
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="acceptTerms"
                          >
                            I agree and accept the{" "}
                            <Link to="/terms">terms and conditions</Link>
                          </label>
                          {termsAcceptedError && (
                            <div className="invalid-feedback">
                              {termsAcceptedError}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </div>

                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?{" "}
                          <Link to="/login">Log in</Link>
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
