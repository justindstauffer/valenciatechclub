import React from "react";
import OfficerCard from "./officerCard";
import jstauffer from "../../images/jstauffer.jpg";
import Andre from "../../images/andre.jpg";
import Dakota from "../../images/dakota.jpg";
import Jorge from "../../images/jorge.jpg";
import Justin from "../../images/justin_gamedev.jpg";

const Officers = () => {
  let Officerdata = [
    { name: "Justin Stauffer", picture: jstauffer, role: "Co-President" },
    { name: "Andre", picture: Andre, role: "Vice President" },
    { name: "Dakota", picture: Dakota, role: "Secretary" },
    { name: "Jorge", picture: Jorge, role: "Repair Team Lead" },
    { name: "Justin", picture: Justin, role: "Game Dev Team Lead" }
  ];
  return (
    <div className="bg-dark" style={{ padding: "1rem" }}>
      <h1
        className="display-4 font-weight-bold text-light"
        style={{
          padding: "1rem"
        }}
      >
        Officers
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "1rem"
        }}
      >
        {Officerdata.map((officer, index) => {
          return (
            <OfficerCard
              image={officer.picture}
              title={officer.name}
              subtitle={officer.role}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Officers;
