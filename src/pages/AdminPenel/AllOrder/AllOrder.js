import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllOrder.css';

const AllOrder = ({ allorder }) => {


  const handleAdminDelete = (id) => {
    
     const deleteOrder = window.confirm("Are you sure you want to delete");

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
        <div className="card mb-3 w-100 p-2">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={allorder?.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{allorder?.name}</h5>
                <div className="d-flex justify-content-center">
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="me-2">Capacity :</span>
                    {allorder?.capacity}
                  </p>
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-ruler-combined"></i>
                    </span>
                    <span className="me-2">Size :</span>
                    {allorder?.size}sqm
                  </p>
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-binoculars"></i>
                    </span>
                    <span className="me-2">View :</span>
                    {allorder?.view}
                  </p>
                </div>
                <p className="card-text">
                  {allorder.status === "Pending" ? (
                    <small className="text-danger">{allorder?.status}...</small>
                  ) : (
                    <small className="text-success">{allorder?.status}</small>
                  )}
                </p>
              </div>
              <div className="">
                <span className="me-2">
                  <img
                    src={allorder?.userPhoto}
                    alt=""
                    className="allorder-user-img"
                  />
                </span>
                <span className="me-2">Name: {allorder?.userName}</span>
                <span className="">Email: {allorder?.email}</span>
              </div>
              <div className="mt-2 mt-md-0">
                <Link to={`/update-user-status/${allorder?._id}`}>
                  <Button className="btn btn-primary me-5">Update</Button>
                </Link>
                <Button className="btn btn-danger" onClick={()=>handleAdminDelete(allorder?._id)}>Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
};

export default AllOrder;