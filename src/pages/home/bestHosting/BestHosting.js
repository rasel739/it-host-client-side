import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeTitle from "../../../components/comonTitle/HomeTitle";
import BestHostingItem from "./BestHostingItem";

const BestHosting = () => {
  const bestHostingObj = [
    {
      id: 1,
      bhTitle: "99.9% Uptime Guarantee",
      bhText: "Share processes and data secure lona need to know basis",
      bhImage: "https://i.ibb.co/m9JZDFW/choose-us-1.png",
    },
    {
      id: 2,
      bhTitle: "Safe and Secured",
      bhText: "Our team assured your web site is always safe and secure",
      bhImage: "https://i.ibb.co/bFJ4R1B/choose-us-2.png",
    },
    {
      id: 1,
      bhTitle: "Our Dedicated Support",
      bhText: "We finally found a host that truly understood the unique",
      bhImage: "https://i.ibb.co/qNWmYfJ/choose-us-3.png",
    },
  ];

  return (
    <Container fluid className="pt-5 pb-5 bg-light">
      <Container>
        <HomeTitle
          title="Best Hosting"
          singleWord="WHY"
          subTitle="CHOOSE US"
        ></HomeTitle>
        <div>
          <Row xs={1} md={3} className="g-4">
            {bestHostingObj.map((bestHostingArray) => (
              <Col>
                <BestHostingItem
                  key={bestHostingArray.id}
                  bestHostingArray={bestHostingArray}
                ></BestHostingItem>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default BestHosting;
