import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Example = props => {
  return (
    <div>
      <Card
        style={{
          maxWidth: "350px",
          boxShadow: "0px 0px 0px 5px #343a40",
          border: '1px solid #343a40',
          marginBottom: "2rem"
        }}
      >
        <CardImg
          top
          src={props.image}
          alt="Card image cap"
          style={{
            height: "300px",
            backgroundSize: "cover",
            width: "300px"
          }}
        />
        <CardBody>
          <CardTitle className="font-weight-bold">
            <h3>{props.title}</h3>
          </CardTitle>
          <CardSubtitle>
            <h5>{props.subtitle}</h5>
          </CardSubtitle>

          <Button color="danger">More Info</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
