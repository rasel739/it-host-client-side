import React from 'react';
import { Col,Button } from 'react-bootstrap';
import './MyOrder.css';

const MyOrder = ({ order }) => {
    
  const handleDeleteOrder = (id) => {
        
    const deleteOrder = window.confirm('Are you sure you want to delete')
    
    if (deleteOrder) {
        
      fetch(`https://saimon-hotel.herokuapp.com/deleteMyOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Deleted successfully");
            window.location.reload();
          }
        });
      }
      }

    return (
      <Col>
        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={order?.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{order?.name}</h5>
                <div className="d-flex justify-content-center">
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="me-2">Capacity :</span>
                    {order?.capacity}
                  </p>
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-ruler-combined"></i>
                    </span>
                    <span className="me-2">Size :</span>
                    {order?.size}sqm
                  </p>
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-binoculars"></i>
                    </span>
                    <span className="me-2">View :</span>
                    {order?.view}
                  </p>
                </div>
                <p className="card-text">
                  {order.status === "Pending" ? (
                    <small className="text-danger">{order?.status}...</small>
                  ) : (
                    <small className="text-success">{order?.status}</small>
                  )}
                </p>
              </div>
              <div className="mb-3">
                <Button className="btn btn-danger" onClick={()=>handleDeleteOrder(order?._id)}>Delete Order</Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
};

export default MyOrder;