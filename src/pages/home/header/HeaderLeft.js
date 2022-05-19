import React from "react";
import { Button } from "react-bootstrap";

const HeaderLeft = () => {
  return (
    <div className="text-start text-light">
      <div>
        <h6>WE PROVIDE</h6>
        <h1 className="my-3">PREMIUM HOSTING</h1>
        <p>
          Share processes and data securely on a need to know basis without the
          need for reconciliation it combines a permissione.
        </p>
      </div>
      <div className="d-flex mx-auto ">
        <div>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
        <div className="ms-5">
          <Button variant="outline-primary" size="lg">
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
