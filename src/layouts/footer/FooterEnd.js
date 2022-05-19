import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { BsLinkedin, BsPinterest, BsSkype, BsYoutube } from "react-icons/bs";
import footerEndStyle from "../../assets/css/footer.module.css";
import itHostLogo from "../../assets/images/it-host-logo.png";

const FooterEnd = () => {
  const footerDate = new Date();

  return (
    <Container fluid className={footerEndStyle.footerEnd}>
      <Container>
        <Row xs={1} md={3}>
          <Col>
            <div className="text-white">
              <p>
                &copy; {footerDate.getFullYear()}{" "}
                <span>It-host Hosting service provider</span>
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img src={itHostLogo} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <Nav defaultActiveKey="/home" as="ul" className="ms-5">
                <Nav.Item as="li" className="ms-5">
                  <Nav.Link href="/home">
                    <BsLinkedin className="text-white" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">
                    <BsYoutube className="text-white" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-2">
                    <BsSkype className="text-white" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-2">
                    <BsPinterest className="text-white" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FooterEnd;
