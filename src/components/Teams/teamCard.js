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
          maxHeight: "400px",
          marginBottom: "16px",
          boxShadow: "0px 0px 0px 5px #343a40",
          border: '1px solid #343a40'
        }}
      >
        <CardImg
          top
          width="300px"
          src={props.image}
          alt="Card image cap"
          style={{ maxHeight: "200px", backgroundSize: "cover" }}
        />
        <CardBody>
          <CardTitle className="font-weight-bold">
            <h2>{props.title}</h2>
          </CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.content}</CardText>
          <Button color="danger">More Info</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
