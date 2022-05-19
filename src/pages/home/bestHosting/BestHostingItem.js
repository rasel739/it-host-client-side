import React from "react";
import { Card } from "react-bootstrap";

const BestHostingItem = ({ bestHostingArray }) => {
  const { bhTitle, bhText, bhImage } = bestHostingArray;

  return (
    <Card>
      <Card.Img variant="top" src={bhImage} />
      <Card.Body>
        <Card.Title>{bhTitle}</Card.Title>
        <Card.Text>{bhText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BestHostingItem;
