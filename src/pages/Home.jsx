import React, { useEffect } from "react";
import CardImg from "../assets/section.png";
import PersonImg from "../assets/person.png";
import Logo from "../assets/logo.png";
import PlayButton from "../assets/button1.png";
import StartButton from "../assets/button2.png";
import { useNavigate } from "react-router-dom";

const data ={
  "Game": {
    "id": "ec14dcc2-304d-4052-a177-01d68dd6a952",
    "name": "Laser Maze",
    "playInstruction": "Instructions to play laser maze, ##12e324 erferfefr referfrwefrefsfe efewrtf wedqwwpiounb iqu3p9e8hjbsd,cnm ljhlijnsdcmn ",
    "version": 1,
    "perPersonCost": 500
  }
}

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/instruction");
  };
  const fullName = data.Game.name;
  const [firstName, ...lastNameArray] = fullName.split(" ");
const lastName = lastNameArray.join(" ");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const proxyUrl = 'https://378027ioph.execute-api.ap-south-1.amazonaws.com';
        const apiUrl = '/test/Users?id=ec14dcc2-304d-4052-a177-01d68dd6a952';
        const res = await fetch(proxyUrl + apiUrl, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        });

        const data = res.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="center-card">
      <div className="avatar-card">
        <div className="person-img">
          <div className="logo-content">
            <img src={Logo} alt="logo" className="logo-img" />
            <p className="user-firstname">
              {firstName} <br />
              <span className="user-lastname">{lastName}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card-img">
        <img src={CardImg} alt="card img" />
        <div className="card-content">
          <h1>LASERTAG</h1>
          <p className="description">
            Exhilarating and action-packed gaming experience that combines
            strategic thinking, quick reflexes, and a quest for treasure.
            Players find themselves in a dynamic and challenging environment
            where they must navigate through a series of laser-filled obstacles,
            complete various tasks, and strive to uncover the ultimate treasure.
          </p>
          <div className="flex-between">
            <p className="type-key">Duration</p>
            <p className="type-value">9 to 15 mins</p>
          </div>
          <div className="flex-between">
            <p className="type-key">Maximum players</p>
            <p className="type-value">12 players</p>
          </div>
          <div className="action-btns">
            <img src={PlayButton} alt="play button" />
            <img onClick={handleStart} src={StartButton} alt="start button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
