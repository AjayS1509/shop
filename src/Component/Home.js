import React from "react";
import Background from "../Images/background_1.jpg";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={Background}
          className="card-img"
          alt="bacground"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="container">
            <h5 className="card-title display-3 fw-border mb-0">
              New Season Arrivals...
            </h5>
            <p className="card-text lead fs-2">Check out all the trends</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
