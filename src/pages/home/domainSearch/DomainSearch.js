import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import DomainItem from "./DomainItem";

const DomainSearch = () => {
  const domainObj = [
    {
      id: 1,
      domainTitle: ".com",

      domainPrice: 10,
    },
    {
      id: 2,
      domainTitle: ".co",

      domainPrice: 8,
    },
    {
      id: 3,
      domainTitle: ".info",

      domainPrice: 6.45,
    },
    {
      id: 4,
      domainTitle: ".net",

      domainPrice: 5.67,
    },
    {
      id: 5,
      domainTitle: ".store",

      domainPrice: 3.37,
    },
  ];

  return (
    <Container fluid className="pt-5 pb-5 bg-light">
      <Container>
        <div>
          <InputGroup className="mb-3 border border-1 rounded-pill" size="lg">
            <FormControl
              className="rounded-pill"
              placeholder="domain.com"
              aria-label="domain.com"
              aria-describedby="basic-addon2"
            />
            <Button
              style={{ backgroundColor: "#1868DD" }}
              className=" m-1 rounded-pill"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </div>

        <Row Row xs={4} md={5} className="g-4">
          {domainObj.map((domainArray) => (
            <Col>
              <DomainItem
                key={domainArray.id}
                domainArray={domainArray}
              ></DomainItem>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default DomainSearch;
