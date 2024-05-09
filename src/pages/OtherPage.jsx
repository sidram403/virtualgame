import React from "react";
import CardImg from "../assets/section.png";
import StartButton from "../assets/button2.png";
import BackButton from "../assets/button3.png";
import { useNavigate } from "react-router-dom";

const OtherPage = () => {
  const navigate = useNavigate();

  return (
    <div className="center-card">
      <div className="card-img">
        <img src={CardImg} alt="card img" className="instruction-card-bg" />
        <div className="instruction-card-content">
          <h1>Other Content</h1>

        </div>
      </div>
    </div>
  );
};

export default OtherPage;
