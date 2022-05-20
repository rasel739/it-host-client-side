import { useEffect, useState } from "react";

const usePlanPrice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://it-host.herokuapp.com/bestHostingData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default usePlanPrice;
