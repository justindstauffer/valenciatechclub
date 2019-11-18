import React from "react";
import AdvisorCard from './advisorCard'
import Hennel from '../../images/hennel.jpg'
import Hensel from '../../images/hensel.jpg'
import Hunchuck from '../../images/hunchuck.jpg'

const Advisors = () => {
  let AdvisorData = [
    { name: "Professor Hensel", picture: Hensel, role: "Advisor" },
    { name: "Professor Hennel", picture: Hennel, role: "Advisor" },
    { name: "Professor Hunchuck", picture: Hunchuck, role: "Advisor" }
  ];
  return (
    <div
    id='advisors'
      style={{
        padding: "1rem"
      }}
    >
      <h1
        className="display-4 font-weight-bold text-dark"
        style={{
          padding: "1rem"
        }}
      >
        Advisors
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
        {AdvisorData.map((officer, index) => {
          return (
            <AdvisorCard
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

export default Advisors;
