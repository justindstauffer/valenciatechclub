import React from "react";
import OfficerCard from "./officerCard";
import jstauffer from "../../images/jstauffer.jpg";
import Andre from "../../images/andre.jpg";
import Dakota from "../../images/dakota.jpg";
import Jorge from "../../images/jorge.jpg";
import Justin from "../../images/justin_gamedev.jpg";
import Dylan from '../../images/dylan_picture.jpg'
import Sue from '../../images/sue.jpg'
import Lev from '../../images/lev.jpg'

const Officers = () => {
  let Officerdata = [
    { name: "Justin Stauffer", picture: jstauffer, role: "Co-President" },
    { name: "Lev Vinokur", picture: Lev, role: "Co-President" },
    { name: "Andre Fernandez", picture: Andre, role: "Vice President" },
    { name: "Dakota Rivera", picture: Dakota, role: "Secretary" },
    { name: "Suerellys Ortiz", picture: Sue, role: "Marketing Officer"},
    { name: "Jorge Yaghmour", picture: Jorge, role: "Repair Team Lead" },
    { name: "Justin Dimitri", picture: Justin, role: "Game Dev Team Lead" },
    { name: "Dylan Poll", picture: Dylan, role: "Embedded Systems Team Lead"},
    
  ];
  return (
    <div id='officers' className="bg-dark" style={{ padding: "1rem" }}>
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
