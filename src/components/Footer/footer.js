import React from "react";
import bgimage from "../../images/bg-cool.jpg";

const Example = props => {
  return (
    <div>
      <div
        id="homeJumbotron"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          color: "white",
          height: "450px",
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{
            marginTop: 'auto'
        }}>
          <h1 className="display-1 font-weight-bold">
            Valencia Tech Club
          </h1>
        </div>
        <p style={{
            marginTop: 'auto'
        }}>
          © Valencia Tech Club 2019
        </p>
      </div>
    </div>
  );
};

export default Example;
