import React from "react";

const HomeTitle = ({ title, singleWord, subTitle }) => {
  return (
    <div className="mb-5">
      <h6 className="text-secondary">{title}</h6>
      <h2>
        <span className="me-2 text-dark">{singleWord}</span>
        <span className="text-success">{subTitle}</span>
      </h2>
    </div>
  );
};

export default HomeTitle;
