import React from "react";
import { Button } from "reactstrap";
import bgimage from "../../images/bg-technology.jpg";

const Example = props => {
  return (
    <div
    id='homeJumbotron'
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        color: "white",
        maxHeight: "900px",
        padding: "11rem 0"
      }}
    >
      <div>
        <h1 className="display-1 font-weight-bold">Valencia Tech Club</h1>
        <p className="lead font-weight-bold">
          "The present is theirs; the future, for which I really worked, is
          mine" — Nikola Tesla
        </p>

        <p className="lead">
          <Button color="danger">Learn More</Button>
        </p>
      </div>
    </div>
  );
};

export default Example;
