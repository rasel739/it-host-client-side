import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeTitle from "../../../components/comonTitle/HomeTitle";
import useBestService from "../../../helpers/hooks/useBestService";
import BestServiceItem from "./BestServiceItem";

const BestService = () => {
  const [data] = useBestService();

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
            {data.map((bestServiceArray) => (
              <Col>
                <BestServiceItem
                  key={bestServiceArray._id}
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
