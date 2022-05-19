import React from "react";
import { Nav } from "react-bootstrap";

const FooterItem = ({ footerArray }) => {
  const {
    footerTitle,
    link1,
    link2,
    link3,
    link4,
    link5,
    textOne,
    textTwo,
    textThree,
    textFour,
    textFive,
  } = footerArray;

  return (
    <div className="flex-column">
      <h3 className="text-white ">{footerTitle}</h3>
      <div className="border-bottom border-danger w-25 mx-auto"></div>
      <Nav.Link href={link1} className="text-light">
        {textOne}
      </Nav.Link>
      <Nav.Link href={link2} className="text-light">
        {textTwo}
      </Nav.Link>
      <Nav.Link href={link3} className="text-light">
        {textThree}
      </Nav.Link>
      <Nav.Link href={link4} className="text-light">
        {textFour}
      </Nav.Link>
      <Nav.Link href={link5} className="text-light">
        {textFive}
      </Nav.Link>
    </div>
  );
};

export default FooterItem;
