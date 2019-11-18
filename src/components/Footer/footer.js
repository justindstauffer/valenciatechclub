import React from "react";
import bgimage from "../../images/bg-cool.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Example = props => {
  return (
    <div>
      <div
        id="homeJumbotron"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          color: "white",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            marginTop: "auto",
            width: '100%',
            maxWidth: '500px'
          }}
        >
          {/* <h1 className="display-1 font-weight-bold">Valencia Tech Club</h1> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: 'wrap',
              justifyContent: "space-around"
            }}
          >
            <div className='bg-danger rounded-circle flexed' style={{
                width: '75px',
                height: '75px'
            }}>
              <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
            </div>
            <div className='bg-danger rounded-circle flexed' style={{
                width: '75px',
                height: '75px'
            }}>
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
            </div>
            <div className='bg-danger rounded-circle flexed' style={{
                width: '75px',
                height: '75px'
            }}>
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </div>
          </div>
        </div>
        <p
          style={{
            marginTop: "auto"
          }}
        >
          © Valencia Tech Club 2019
        </p>
      </div>
    </div>
  );
};

export default Example;
