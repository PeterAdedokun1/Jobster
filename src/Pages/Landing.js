import React from "react";
// import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../Components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking App </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            earum eum corrupti sunt, animi provident necessitatibus accusantium
            maxime suscipit adipisci dicta pariatur maiores, quia magnam
            tempora? Quod nesciunt facere quam vel labore. Itaque perferendis
            maiores ipsam ullam modi ducimus dolorem!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

             
export default Landing;
