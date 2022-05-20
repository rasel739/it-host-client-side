import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const HostingDetails = () => {
  const { id } = useParams();

  return <Container>Hosting Details {id}</Container>;
};

export default HostingDetails;
