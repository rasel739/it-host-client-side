import React from "react";
import { Card } from "react-bootstrap";

const BestServiceItem = ({ bestServiceArray }) => {
  const { serviceTitle, serviceText, serviceImage } = bestServiceArray;
  return (
    <Card className="border-0">
      <Card.Img variant="top" src={serviceImage} className="w-50 p-5 mx-auto" />
      <Card.Body>
        <Card.Title>{serviceTitle}</Card.Title>
        <Card.Text>{serviceText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BestServiceItem;
