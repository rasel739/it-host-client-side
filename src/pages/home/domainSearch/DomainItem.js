import React from "react";

const DomainItem = ({ domainArray }) => {
  const { domainTitle, domainPrice } = domainArray;

  return (
    <div>
      <div className="d-flex ">
        <span>
          <h5>{domainTitle}</h5>
        </span>
        /
        <span>
          <h6>${domainPrice}</h6>
        </span>
      </div>
    </div>
  );
};

export default DomainItem;
