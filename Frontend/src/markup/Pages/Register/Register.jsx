import React from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import classes from "../../../assets/styles/user/user.module.css";
import logo1 from "../../../assets/images/logoYc.png";
import { useState } from "react";

function Register() {
  const [full_name, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  // Frontend Error handler
  const [fullnamerequired, setFullnamerequired] = useState("")
  const [usernamerequired, setUsernamerequired] = useState("")
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    let valid = true //flag

    if(!full_name){
      setFullnamerequired("Please provide your Full-name!");
      valid = false
    }else{
      setFullnamerequired("")
    }
    if(!username){
      setUsernamerequired("Please provide your username!")
      valid = false
    }else{
      setUsernamerequired("")
    }
    if(!email){
      setEmailError("Please provide your email!");
      valid = false
    }else if(!email.includes("@")){
      setEmailError("Invalid email format!")
    }else{
      const regex = /^\S+@\S+\.\S+$/;
      if(!regex.test(email)){
        setEmailError("Invalid email format!")
        valid = false
      }else{
        setEmailError("")
      }
    }
    if(!password){
      setPasswordError("Please enter your password!")
      valid = false
    }else {
      const regex = /^(?=.*\d).{8,}$/;
      if(!regex.text(password)){
        setPasswordError("Password must be at least 8 characters and contain a number!");
        valid = false
      }else{
        setPasswordError("")
      }
    }
    if(!valid){
      return
    }
    const formdata = {
      full_name,
      username,
      email,
      password
    }
  }

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
                            <Link to="/terms"> terms and conditions</Link>
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
