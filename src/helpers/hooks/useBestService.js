import { useEffect, useState } from "react";

const useBestService = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://it-host.herokuapp.com/bestService")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useBestService;
