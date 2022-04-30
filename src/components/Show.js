import React from "react";
import Card from "./Card";

const Show = ({ missionName }) => {
  return (
    <div className="show-container">
      <div className="card-container">
        {missionName?.map((mission) => (
          <Card mission={mission} key={mission.light_number}></Card>
        ))}
      </div>
    </div>
  );
};

export default Show;
