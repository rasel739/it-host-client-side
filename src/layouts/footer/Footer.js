import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerStyle from "../../assets/css/footer.module.css";
import FooterEnd from "./FooterEnd";
import FooterItem from "./FooterItem";

const Footer = () => {
  const footerObj = [
    {
      id: 1,
      footerTitle: "Services",
      link1: "/home",
      link2: "/home",
      link3: "/home",
      link4: "/home",
      link5: "/home",
      textOne: "Shared Hosting",
      textTwo: "Reseller Hosting",
      textThree: "Cloud Hosting",
      textFour: "VPS Hosting",
      textFive: "Dedicated Hosting",
    },
    {
      id: 2,
      footerTitle: "Company",
      link1: "/home",
      link2: "/home",
      link3: "/home",
      link4: "/home",
      link5: "/home",
      textOne: "About Us",
      textTwo: "Contact",
      textThree: "Support",
      textFour: "Pricing",
      textFive: "Affiliate",
    },
    {
      id: 3,
      footerTitle: "Solutions",
      link1: "/home",
      link2: "/home",
      link3: "/home",
      link4: "/home",
      textOne: "Whois",
      textTwo: "Privacy Policy",
      textThree: "FAQ",
      textFour: "Log In",
    },
    {
      id: 4,
      footerTitle: "Contact Info",
      textOne: "9/4c, 1010 Avenue, NY, USA",
      textTwo: "009-215-5596 (toll free) 009-215-5596",
      textThree: "9/4c, 1010 Avenue, NY, USA",
    },
  ];

  return (
    <>
      <Container fluid className={footerStyle.footer}>
        <Container>
          <div>
            <Row xs={1} md={4} className="g-3">
              {footerObj.map((footerArray) => (
                <Col>
                  <FooterItem
                    key={footerArray.id}
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
