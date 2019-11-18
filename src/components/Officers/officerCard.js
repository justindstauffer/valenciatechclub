import React from "react";
import {
  Card,
  CardImg,
  CardText,
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
          maxWidth: "450px",
          maxHeight: "450px",
          boxShadow: "0px 0px 0px 5px #04a3fe"
        }}
      >
        <CardImg
          top
          src={props.image}
          alt="Card image cap"
          style={{
            maxHeight: "300px",
            backgroundSize: "cover",
            width: "300px"
          }}
        />
        <CardBody>
          <CardTitle className="font-weight-bold">
            <h2>{props.title}</h2>
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
