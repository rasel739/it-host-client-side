import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerStyle from "../../assets/css/footer.module.css";
import useFooter from "../../helpers/hooks/useFooter";
import FooterEnd from "./FooterEnd";
import FooterItem from "./FooterItem";

const Footer = () => {
  const [data] = useFooter();

  return (
    <>
      <Container fluid className={footerStyle.footer}>
        <Container>
          <div>
            <Row xs={1} md={4} className="g-3">
              {data.map((footerArray) => (
                <Col>
                  <FooterItem
                    key={footerArray._id}
                    footerArray={footerArray}
                  ></FooterItem>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Container>
      <FooterEnd />
    </>
  );
};

export default Footer;
