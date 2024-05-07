import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

import Wrapper from "../assets/wrappers/LandingPage";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span> tracking</span> app
            </h1>
            <p>
            Keeping track of your job applications has never been easier with Jobify! Developed by Santosh Kharel, Jobify is a simple yet powerful application designed to streamline your job search process. Say goodbye to messy spreadsheets and endless emails – with Jobify, you can effortlessly track, update, and manage all your job applications in one convenient place
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" srcset="" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
