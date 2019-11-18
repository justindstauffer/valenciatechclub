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
    <div className='bg-dark'>
      <h1
        className="display-4 font-weight-bold text-light"
        style={{
          paddingTop: "1rem"
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
          padding: '1rem 0'
        }}
      >
        {Officerdata.map(officer => {
          return <OfficerCard image={officer.picture} title={officer.name} subtitle={officer.role} />;
        })}
      </div>
    </div>
  );
};

export default Officers;
