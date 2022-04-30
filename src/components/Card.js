import React from "react";

const Card = (props) => {
  const { mission } = props;
  console.log(mission);
  return (
    <div>
      {" "}
      <div className="card">
        <div className="card-img">
          <img src={mission.links.mission_patch} alt="Avatar" width={"50px"} />
        </div>
        <div className="container">
          <h4>
            <b>{mission.mission_name}</b>
          </h4>
          <p> Launch Year :{mission.launch_year}</p>
          <p>
            Successful Launch :
            {mission.launch_success === true ? "True" : "False"}
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Card;
