import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerStyle from "../../../assets/css/header.module.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <Container fluid className={headerStyle.headerBg}>
      <Container>
        <Row className="d-flex  align-items-center">
          <Col xs={12} md={6}>
            <HeaderLeft />
          </Col>
          <Col xs={12} md={6}>
            <HeaderRight />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
