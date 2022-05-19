import React from "react";
import { Button, Card } from "react-bootstrap";

const PricingPlanItem = ({ pricingHostingArray }) => {
  const {
    priceTitle,
    priceText,
    startingAt,
    price,
    discount,
    discountPrice,
    buyNow,
    priceImage,
    pricingStyle,
  } = pricingHostingArray;

  return (
    <Card className={pricingStyle}>
      <Card.Img variant="top" src={priceImage} className="p-5" />
      <Card.Body>
        <Card.Title className="text-light">{priceTitle}</Card.Title>
        <Card.Text className="text-light">{priceText}</Card.Text>
        <Card.Text className="text-light">{startingAt}</Card.Text>
        <Card.Text className="display-1 text-light">
          <sup>$</sup>
          {price}
        </Card.Text>
        <Card.Text className="text-light">
          <span className="me-2">{discount}</span>
          <span>
            $ <del className="text-light">{discountPrice}</del>
          </span>
        </Card.Text>
        <Button variant="primary" className="bg-light text-dark">
          {buyNow}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PricingPlanItem;
