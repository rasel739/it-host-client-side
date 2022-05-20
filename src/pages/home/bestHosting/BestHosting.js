import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeTitle from "../../../components/comonTitle/HomeTitle";
import useBestHosting from "../../../helpers/hooks/useBestHosting";
import BestHostingItem from "./BestHostingItem";

const BestHosting = () => {
  const [data] = useBestHosting();

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
            {data.map((bestHostingArray) => (
              <Col>
                <BestHostingItem
                  key={bestHostingArray._id}
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
