import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import useDomain from "../../../helpers/hooks/useDomain";
import DomainAvilabile from "./DomainAvilabile";
import DomainItem from "./DomainItem";

const DomainSearch = () => {
  const [data] = useDomain();
  const [searchData, setSearchData] = useState("google");
  const [dataArray, setDataArray] = useState([]);

  const serchValueText = useRef("google");

  const searchFun = () => {
    setSearchData(serchValueText.current.value);
  };

  useEffect(() => {
    fetch(
      `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_uYtmOiu7RhR9tlqOJ5XmVh0FdY4a9&domainName=${searchData}`
    )
      .then((res) => res.json())
      .then((data) => setDataArray(data?.DomainInfo));
  }, [searchData]);

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
              ref={serchValueText}
              onChange={searchFun}
            />
            <Button
              style={{ backgroundColor: "#1868DD" }}
              className=" m-1 rounded-pill"
              id="button-addon2"
              onClick={searchFun}
            >
              Search
            </Button>
          </InputGroup>
        </div>

        <Row Row xs={4} md={5} className="g-4">
          {data.map((domainArray) => (
            <Col>
              <DomainItem
                key={domainArray._id}
                domainArray={domainArray}
              ></DomainItem>
            </Col>
          ))}
        </Row>
        <div className="mt-2">
          {serchValueText.current.value === "" ? (
            <div></div>
          ) : (
            <DomainAvilabile dataArray={dataArray}></DomainAvilabile>
          )}
        </div>
      </Container>
    </Container>
  );
};

export default DomainSearch;
