import React from "react";
import { Container, Image } from "react-bootstrap";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <Container fluid className="page-not-found">
      <Container>
        <div class="error">404</div>
        <br />
        <br />
        <span class="info">File not found</span>
        <Image
          src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
          class="static"
        />
      </Container>
    </Container>
  );
};

export default PageNotFound;
