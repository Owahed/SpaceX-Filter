import React, { useEffect, useState } from "react";
import Select from "./Select";
import Show from "./Show";

const Home = () => {
  const [missionName, setMissionName] = useState();

  useEffect(() => {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((res) => res.json())
      .then((data) => setMissionName(data));
  }, []);

  const filter = (button) => {
    const filteredData = missionName.filter(
      (item) => item.launch_year === button
    );
    setMissionName(filteredData);
  };
  return (
    <div className="home-container">
      <h1> SpaceX launch programs</h1>
      <div className="main-container">
        <Select filter={filter} />
        <Show missionName={missionName} />
      </div>
    </div>
  );
};

export default Home;
