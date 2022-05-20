import { useEffect, useState } from "react";

const usePricingPlan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pricingPlan")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default usePricingPlan;
