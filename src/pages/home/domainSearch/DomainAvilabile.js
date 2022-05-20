import React from "react";
import { Button, Table } from "react-bootstrap";

const DomainAvilabile = ({ dataArray }) => {
  return (
    <Table striped bordered hover size="sm" responsive>
      <tbody>
        <tr>
          <td>{dataArray?.domainName}</td>
          <td>
            {dataArray?.domainAvailability === "AVAILABLE" ? (
              <span className="text-success">
                {dataArray?.domainAvailability}
              </span>
            ) : (
              <spna className="text-danger">
                {dataArray?.domainAvailability}
              </spna>
            )}
          </td>
          <td>
            {dataArray?.domainAvailability === "UNAVAILABLE" ? "" : "$ 10"}
          </td>
          <td>
            {dataArray?.domainAvailability === "AVAILABLE" ? (
              <Button variant="primary">Add To Cart</Button>
            ) : (
              <Button variant="primary" disabled>
                Add To Cart
              </Button>
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DomainAvilabile;
