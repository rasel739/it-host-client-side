import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeTitle from "../../../components/comonTitle/HomeTitle";
import BestServiceItem from "./BestServiceItem";

const BestService = () => {
  const bestServiceObj = [
    {
      id: 1,
      serviceTitle: "Shared Hosting",
      serviceText: "Share processes and data secure lona need to know basis",
      serviceImage: "https://i.ibb.co/hLYHbbS/service-1.png",
    },
    {
      id: 2,
      serviceTitle: "Reseller Hosting",
      serviceText: "Share processes and data secure lona need to know basis",
      serviceImage: "https://i.ibb.co/y5yLJsV/service-2.png",
    },
    {
      id: 3,
      serviceTitle: "VPS Hosting",
      serviceText: "Share processes and data secure lona need to know basis",
      serviceImage: "https://i.ibb.co/Qvc6gsn/service-3.png",
    },
    {
      id: 4,
      serviceTitle: "Cloud Hosting",
      serviceText: "Share processes and data secure lona need to know basis",
      serviceImage: "https://i.ibb.co/4dZP2Cv/service-4.png",
    },
    {
      id: 5,
      serviceTitle: "Dedicated Hosting",
      serviceText: "Share processes and data secure lona need to know basis",
      serviceImage: "https://i.ibb.co/6bBFgXf/service-5.png",
    },
    {
      id: 6,
      serviceTitle: "Domain Name",
      serviceText: "Share processes and data secure lona need to know basis",
      serviceImage: "https://i.ibb.co/WGxNpyk/service-6.png",
    },
  ];

  return (
    <Container fluid className="pt-5 pb-5 bg-light">
      <Container>
        <HomeTitle
          title="Best Service"
          singleWord="OUR"
          subTitle=" BEST SERVICE"
        ></HomeTitle>
        <div>
          <Row xs={1} md={3} className="g-4">
            {bestServiceObj.map((bestServiceArray) => (
              <Col>
                <BestServiceItem
                  key={bestServiceArray.id}
                  bestServiceArray={bestServiceArray}
                ></BestServiceItem>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default BestService;
